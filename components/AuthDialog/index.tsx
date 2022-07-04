import { FC, useState } from 'react'
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  TextField,
  Typography,
} from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import styles from './AuthDialog.module.scss'
import { MainForm } from './Forms/Main'
import { LoginForm } from './Forms/Login'
import { RegisterForm } from './Forms/Register'

interface AuthDialogProps {
  onClose: () => void
  visible: boolean
}

export const AuthDialog: FC<AuthDialogProps> = ({ onClose, visible }) => {
  const [formType, setFormType] = useState<'main' | 'login' | 'register'>(
    'main'
  )

  return (
    <Dialog open={visible} onClose={onClose} maxWidth='xs' fullWidth>
      <DialogContent>
        <DialogContentText>
          <div className={styles.content}>
            <Typography className={styles.title}>
              {formType === 'main' ? (
                'Войти в TJ'
              ) : (
                <p
                  onClick={() => setFormType('main')}
                  className={styles.backTitle}
                >
                  <ArrowBack></ArrowBack> К авторизации
                </p>
              )}
            </Typography>
            {formType === 'main' && (
              <MainForm onOpenLogin={() => setFormType('login')} />
            )}
            {formType === 'login' && (
              <LoginForm onOpenRegister={() => setFormType('register')} />
            )}
            {formType === 'register' && (
              <RegisterForm
                onOpenLogin={() => setFormType('login')}
                onOpenRegister={() => setFormType('register')}
              />
            )}
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}
