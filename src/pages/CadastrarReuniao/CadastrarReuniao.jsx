import  { Typography } from "@mui/material";
import styles from "./cadastrarReuniao.module.css";
/*import ReuniaoForm from "../../components/ReuniaoForm/ReuniaoForm";*/

const CadastrarReuniao = () => {
    return (
        <section className={styles.FormularioReuniaoContainer}>
            <Typography
                variant="h3"
                fontWeight="bold"
                sx={{ display: "flex", justifyContent: "center", marginTop: "10vh" }}
                color="primary.main"
            >
                Formulário de cadastro
            </Typography>

            <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ display: "flex", justifyContent: "center" }}
                color="primary.main"
            >
                Cadastrar Reunião
            </Typography>

            {/* <ReuniaoForm /> */}
        </section>
    )
}

export default CadastrarReuniao;