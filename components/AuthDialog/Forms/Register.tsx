import { FC } from 'react'
import { Button } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'
import { RegisterFormSchema } from '../../../utils/validations'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormField } from '../../FormField'

interface RegisterFormProps {
  onOpenRegister: () => void
  onOpenLogin: () => void
}

export const RegisterForm: FC<RegisterFormProps> = ({
  onOpenRegister,
  onOpenLogin,
}) => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name='fullname' label='Имя и фамилия' />
          <FormField name='email' label='Почта' />
          <FormField name='password' label='Пароль' />
          <div className='d-flex align-center justify-between'>
            <Button
              onClick={onOpenRegister}
              disabled={!form.formState.isValid}
              type='submit'
              color='primary'
              variant='contained'
            >
              Зарегистрироваться
            </Button>
            <Button onClick={onOpenLogin} color='primary' variant='text'>
              Войти
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
