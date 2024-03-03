import { Button, Typography } from "@mui/material";
import notfound2 from "../../assets/6373669.jpg";
import styles from "./notfound.module.css";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.notFoundContainer}>
      <Typography variant="h3" fontWeight="bold" color="primary.main">
        Ops, acho que temos um problema ...{" "}
      </Typography>
      {/* <img src={logo} id={styles.logo}/> */}
      <img src={notfound2} />

      <Typography fontWeight="bold" color="primary.main" sx={{padding: "30px"}}>
        Tudo bem, é normal se perder. Do começo, então?
      </Typography>
      <Button variant="contained" onClick={() => navigate('/')}>Retornar a home</Button>
    </section>
  );
};

export default NotFound;
