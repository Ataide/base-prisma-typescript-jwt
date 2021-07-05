import * as yup from 'yup'

export const peopleSchema = yup.object({
  name: yup.string().defined().min(3),
  cpf: yup.string().matches(/^[0-9]+$/, 'CPF Must be only digits').length(11).defined(),
  email: yup.string().nullable().notRequired().email(),
  phone: yup.string().nullable().notRequired()
})
