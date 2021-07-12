import { PrismaClient } from '@prisma/client'
import { register } from '../../src/features/authentication/register'

const prisma = new PrismaClient()

describe('User Auth functions test', () => {
  beforeAll(async () => {
    const deletePeoples = prisma.$executeRaw('truncate table "public"."User" CASCADE;')
    await prisma.$transaction([deletePeoples])
    await prisma.$disconnect()
  })

  it('should be able to register user with name email password', async () => {
    const body = { name: 'Ataide', email: 'ataide@gmail.com', password: '1234567' }
    const result = await register(body)
    expect(result).toBeGreaterThan(0)
  })
})
