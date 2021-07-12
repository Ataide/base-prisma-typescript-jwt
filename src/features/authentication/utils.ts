import { UserDTO, TokenData, DataStoredInToken } from './interfaces'
import * as jwt from 'jsonwebtoken'

export function createToken (user: UserDTO): TokenData {
  const expiresIn = 60 * 60 // an hour
  const secret = process.env.JWT_SECRET || 'padawan'
  const dataStoredInToken: DataStoredInToken = {
    _id: user.id?.toString()
  }
  return {
    expiresIn,
    token: jwt.sign(dataStoredInToken, secret, { expiresIn })
  }
}

export function createCookie (tokenData: TokenData): string {
  return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn}`
}
