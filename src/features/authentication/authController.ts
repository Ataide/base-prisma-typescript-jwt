import { NextFunction, Request, Response, Router } from 'express'
import { register } from './register'
import { authenticate } from './authenticate'
import { createToken, createCookie } from './utils'
import Controller from '../../interfaces/controllerInterface'
import validateObjectMW from '../../middlewares/validatorMiddleware'
import { userSchema } from '../../schemas/userSchema'

class AuthController implements Controller {
  public path = '/auth'
  public router = Router()

  constructor () {
    this.initializeRoutes()
  }

  private initializeRoutes () {
    this.router.post(`${this.path}/register`, validateObjectMW(userSchema), this.signup)
    this.router.post(`${this.path}/login`, this.login)
  }

  private async signup (req: Request, res: Response, next: NextFunction) {
    try {
      const userId = await register(req.body)
      res.status(201).json(userId)
    } catch (error) {
      next(error)
    }
  }

  private async login (req: Request, res: Response, next: NextFunction) {
    try {
      const userAthenticated = await authenticate(req.body)
      console.log(userAthenticated)
      const tokenData = createToken(userAthenticated)
      res.setHeader('Set-Cookie', [createCookie(tokenData)])
      res.status(200).json(userAthenticated)
    } catch (error) {
      next(error)
    }
  }
}

export default AuthController
