// import { PrismaClient } from '@prisma/client'
// import { Request, Response } from 'express'
// import { createPeople } from '../features/createPeople'

// const prisma = new PrismaClient()

// class PeopleController {
//   public async index (request: Request, response: Response): Promise<Response> {
//     const peoples = await prisma.people.findMany({
//       include: { address: true }
//     })
//     return response.json(peoples)
//   }

//   public async create (request: Request, response: Response): Promise<Response> {
//     const input = request.body
//     const people = await createPeople(input)
//     return response.status(200).json(people)
//   }
// }

// export default new PeopleController()
