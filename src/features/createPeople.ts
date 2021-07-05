// // import { PrismaClient } from '.prisma/client'
// import type { Asserts } from 'yup'
// import { peopleSchema } from '../schemas/peopleSchemas'

// export interface Address {
//   id ?:number
//   street :string
//   number :string
//   district :string
//   region :string
//  }

// export interface People extends Asserts<typeof peopleSchema> {
//   id ?:number
//   address ?:Address
// }

// // const prisma = new PrismaClient()

// // export async function createPeople (body: People): Promise<People> {
// // const { name, cpf, address, email, phone } = body

// // const people = await prisma.people.create({
// //   data: {
// //     name: name,
// //     cpf: cpf,
// //     email: email,
// //     phone: phone,
// //     address: {
// //       create: address
// //     }
// //   }
// // })
// // prisma.$disconnect()

// // return people
// // }
