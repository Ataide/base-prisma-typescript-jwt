import { Asserts } from 'yup'
import { userSchema } from '../../schemas/userSchema'
import { loginSchema } from '../../schemas/loginSchema'

export type User = Asserts<typeof userSchema>

export type LoginDTO = Asserts<typeof loginSchema>

export type UserDTO = {
  id: number | null,
  name: string | null,
  email: string | null,
}

export type Credentials = {
  email: string,
  password: string,
}

export interface TokenData {
  token: string
  expiresIn: number
}
export interface DataStoredInToken {
  _id: string | undefined
}
