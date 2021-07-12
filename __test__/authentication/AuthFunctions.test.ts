import { PrismaClient } from '@prisma/client'
import UserWithThatEmailAlreadyExistsException from '../../src/exceptions/UserWithThatEmailAlreadyExistsException'
import WrongCredentialsException from '../../src/exceptions/WrongCredentialsException'
import { authenticate } from '../../src/features/authentication/authenticate'
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

  it('should be throw an exeception if email already exists in db', async () => {
    const body = { name: 'Ataide', email: 'ataide@gmail.com', password: '1234567' }
    await expect(register(body)).rejects.toMatchObject(new UserWithThatEmailAlreadyExistsException(body.email))
  })

  it('should be able to authenticate with valid credentials', async () => {
    const credentials = { email: 'ataide@gmail.com', password: '1234567' }
    const result = await authenticate(credentials)
    expect(result).toHaveProperty('id')
  })

  it('throw An Exception if invalid credentials', async () => {
    const wrongCredentials = { email: 'ataide@gmsail.com', password: '1234567' }
    await expect(authenticate(wrongCredentials)).rejects.toMatchObject(new WrongCredentialsException())
  })
})
