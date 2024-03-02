import logo from '../../assets/logoGrandeLTMS.svg'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={logo} alt="Logo do LMTS" />
    </div>
  )
}

export default Home