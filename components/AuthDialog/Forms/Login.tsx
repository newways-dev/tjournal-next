import { FC } from 'react'
import { Button } from '@material-ui/core'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import { LoginFormSchema } from '../../../utils/validations'
import { FormField } from '../../FormField'

interface LoginFormProps {
  onOpenRegister: () => void
}

export const LoginForm: FC<LoginFormProps> = ({ onOpenRegister }) => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name='email' label='Почта' />
          <FormField name='password' label='Пароль' />
          <div className='d-flex align-center justify-between'>
            <Button
              disabled={!form.formState.isValid}
              type='submit'
              color='primary'
              variant='contained'
            >
              Войти
            </Button>
            <Button onClick={onOpenRegister} color='primary' variant='text'>
              Регистрация
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
