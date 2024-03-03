import { Button, Typography } from "@mui/material"
import styles from './login.module.css'
import logo from '../../assets/logoGrandeLTMS.svg'
import LoginForm from "../../components/LoginForm/LoginForm"

const Login = () => {
  return (
    <section className={styles.loginContainer}>
        <Typography variant="h3">Gestão Estudante</Typography>

        <img src={logo} alt="Logo do LMTS" />

        <LoginForm />

        <Button>Esqueci minha senha</Button>
    </section>
  )
}

export default Login