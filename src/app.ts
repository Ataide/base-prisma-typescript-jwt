import * as dotenv from 'dotenv'
import express, { json } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import errorMiddleware from './middlewares/errorMiddleware'
import Controller from './interfaces/controllerInterface'

class App {
  public app: express.Application

  constructor (controllers: Controller[]) {
    this.app = express()
    this.middlewares()
    this.initializeControllers(controllers)
    dotenv.config()
  }

  private middlewares (): void {
    this.app.use(morgan('tiny'))
    this.app.use(json())
    this.app.use(cors())
    this.app.use(errorMiddleware)
  }

  private initializeControllers (controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use('/api/v1/', controller.router)
    })
  }

  public listen (): void {
    this.app.listen(process.env.APP_PORT, () => {
      console.log(`🔥 App listening on the port ${process.env.APP_PORT}`)
    })
  }
}

export default App
