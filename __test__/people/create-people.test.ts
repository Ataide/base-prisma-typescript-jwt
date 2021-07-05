// import { PrismaClient } from '.prisma/client'
// import { People, Address, createPeople } from '../../src/features/createPeople'

// const prisma = new PrismaClient()

// describe('People Create Tests', () => {
//   beforeAll(async () => {
//     await prisma.people.createMany({
//       data: [{ name: 'Ataide Bastos', cpf: '22813495867' }]
//     })
//   })

//   afterAll(async () => {
//     const deletePeoples = prisma.$executeRaw('truncate table "public"."People" CASCADE;')
//     await prisma.$transaction([deletePeoples])
//     await prisma.$disconnect()
//   })

//   it('should create 1 people with 1 address', async () => {
//     const address: Address = { street: 'Da Mota', number: '12', district: 'Centro', region: 'Iraucuba' }
//     const people: People = {
//       name: 'João da Mota',
//       cpf: '11122233344',
//       address: address,
//       email: undefined,
//       phone: undefined
//     }

//     await createPeople(people)

//     const peopleDb = await prisma.people.findFirst({ where: { cpf: people.cpf } })

//     expect(peopleDb?.name).toBe('João da Mota')
//   })
// })
