import { NextFunction, Request, Response } from 'express'
import { registerUser } from './registerUser'

class AuthController {
  public async register (req: Request, res: Response, next: NextFunction) {
    try {
      const user = await registerUser(req.body)
      res.status(201).json(user)
    } catch (error) {
      next(error)
    }
  }
}

export default new AuthController()
