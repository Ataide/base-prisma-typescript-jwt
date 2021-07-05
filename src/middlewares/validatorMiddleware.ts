import { NextFunction, Request, Response } from 'express'
import { AnySchema } from 'yup'
import HttpException from '../exceptions/HttpException'

const validateResource = (resourceSchema: AnySchema) => async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const resource = req.body
  try {
    await resourceSchema.validate(resource)
    next()
  } catch (error) {
    next(HttpException.badRequest(error.message))
  }
}

export default validateResource
