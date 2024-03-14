import  { Typography } from "@mui/material";
import styles from "./cadastrarReuniao.module.css";
import ReuniaoForm from "../../../components/Formularios/ReuniaoForm/ReuniaoForm";

const CadastrarReuniao = () => {

    const handleCadastrar = (data) => {
        console.log(data)
    }

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
                variant="h5"
                fontWeight="bold"
                sx={{ display: "flex", justifyContent: "center" }}
                color="primary.main"
            >
                Cadastrar Reunião
            </Typography>

            <ReuniaoForm handleSubmitData={handleCadastrar} cadastro={true}/>
        </section>
    )
}

export default CadastrarReuniao;