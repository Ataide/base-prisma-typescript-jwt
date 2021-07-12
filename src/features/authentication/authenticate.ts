import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import WrongCredentialsException from '../../exceptions/WrongCredentialsException'
import { Credentials, UserDTO } from './interfaces'

export async function authenticate (credentials: Credentials):Promise<UserDTO> {
  const prisma = new PrismaClient()
  try {
    const { email, password } = credentials
    const userExists = await prisma.user.findUnique({ where: { email } })
    if (userExists) {
      const isPasswordMatching = await bcrypt.compare(password, userExists.passwordHash)
      if (isPasswordMatching) {
        const { passwordHash, createdAt, ...userDTO } = userExists
        return userDTO
      } else {
        throw new WrongCredentialsException()
      }
    } else {
      throw new WrongCredentialsException()
    }
  } finally {
    prisma.$disconnect()
  }
}
