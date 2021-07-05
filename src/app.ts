import express, { json } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import errorMiddleware from './middlewares/errorMiddleware'
import authRoutes from './features/authentication/routes'

class App {
  public express: express.Application

  constructor () {
    this.express = express()
    this.middlewares()
  }

  private middlewares (): void {
    this.express.use(morgan('tiny'))
    this.express.use(json())
    this.express.use(cors())
    this.express.use(authRoutes)
    this.express.use(errorMiddleware)
  }
}

export default new App().express
