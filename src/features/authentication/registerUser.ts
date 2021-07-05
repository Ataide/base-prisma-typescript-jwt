import { PrismaClient } from '@prisma/client'
import { Asserts } from 'yup'
import { userSchema } from '../../schemas/userSchema'
import bcrypt from 'bcryptjs'
import UserWithThatEmailAlreadyExistsException from '../../exceptions/UserWithThatEmailAlreadyExistsException'

export type User = Asserts<typeof userSchema>

export async function registerUser (body: User): Promise<number> {
  const prisma = new PrismaClient()
  const { name, email, password } = body
  const emailAlreadyExist = await prisma.user.findUnique({ where: { email } })

  try {
    if (emailAlreadyExist) {
      throw new UserWithThatEmailAlreadyExistsException(email)
    }
    const passwordHash = bcrypt.hashSync(password)
    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash: passwordHash
      }
    })
    return user.id
  } finally {
    prisma.$disconnect()
  }
}
