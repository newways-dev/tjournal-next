import * as yup from 'yup'

export const LoginFormSchema = yup.object().shape({
  email: yup.string().email('Неверная почта').required('Введите почту'),
  password: yup
    .string()
    .min(6, 'Пароль должен быть минимум 6 символов')
    .required('Введите пароль'),
})

export const RegisterFormSchema = yup
  .object()
  .shape({
    fullname: yup.string().required('Имя и фамилия обязательны'),
  })
  .concat(LoginFormSchema)
