import { PrismaClient } from '@prisma/client'
import { registerUser } from '../../src/features/authentication/registerUser'

const prisma = new PrismaClient()

describe('User Registration function test', () => {
  beforeAll(async () => {
    const deletePeoples = prisma.$executeRaw('truncate table "public"."User" CASCADE;')
    await prisma.$transaction([deletePeoples])
    await prisma.$disconnect()
  })

  it('should be able to register user with name email password', async () => {
    const body = { name: 'Ataide', email: 'ataide@gmail.com', password: '1234567' }
    const result = await registerUser(body)
    expect(result).toBeGreaterThan(0)
  })
  it('should not be able to register user with same email', async () => {
    const body = { name: 'Ataide', email: 'ataide@gmail.com', password: '1234567' }
    await expect(registerUser(body)).rejects.toMatchObject(new Error('Email already exist 2'))
  })
})
