import * as dotenv from 'dotenv'
import App from './app'
import AuthController from './features/authentication/authController'

dotenv.config()

const app = new App([
  new AuthController()

])

app.listen()
