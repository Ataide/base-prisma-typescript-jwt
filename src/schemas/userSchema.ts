import * as yup from 'yup'

export const userSchema = yup.object({
  name: yup.string().defined(),
  email: yup.string().defined().email(),
  password: yup.string().defined().nullable()
})
