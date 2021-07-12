import * as yup from 'yup'

export const loginSchema = yup.object({
  email: yup.string().defined().email(),
  password: yup.string().defined()
})
