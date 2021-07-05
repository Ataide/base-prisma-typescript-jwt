import Router from 'express'
import AuthController from './authController'
import validateObjectMW from '../../middlewares/validatorMiddleware'
import { userSchema } from '../../schemas/userSchema'

const authRoutes = Router()

authRoutes.get('/login', (req, res) => { res.json({ route: 'Bem-vindo' }) })
authRoutes.post('/register', validateObjectMW(userSchema), AuthController.register)

export default authRoutes
