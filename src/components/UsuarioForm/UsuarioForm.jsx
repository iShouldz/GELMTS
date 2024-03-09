/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import InputTextComponent from "../UI/InputTextComponent/InputTextComponent";
import SelectComponent from "../UI/SelectComponent/SelectComponent";
import {
  cursos,
  estilosMUI,
  nacionalidade,
  orgaosRG,
} from "../../../utils/lists";
import {
  Box,
  Button,
  FormHelperText,
  LinearProgress,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import styles from "./usuarioform.module.css";
import { useState } from "react";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";

const schema = yup
  .object({
    nome: yup.string().required(),
    rg: yup.string().required(),
    CPF: yup.number().required(),
    celular: yup.string().required(),
    dataEmissao: yup.string().required(),
    orgaoRG: yup.string().required(),
    estadoCivil: yup.string().required(),
    nacionalidade: yup.string().required(),
    naturalidade: yup.string().required(),
    fotoAssinatura: yup.string().required(),
    curso: yup.string().required(),
    gestao: yup.string().required(),
    login: yup.string().required(),
    senha: yup.string().required(),
    admin: yup.string().required(),
  })
  .required();

const UsuarioForm = ({ handleSubmitData }) => {
  const navigate = useNavigate();
  const [rgSelect, setRgSelect] = useState();
  const [pageForm, setPageForm] = useState(25);

  const handleChange = (event) => {
    setRgSelect(event.target.value);
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors)

  return (
    <form
      onSubmit={handleSubmit(handleSubmitData)}
      className={styles.formContainer}
    >
      <Typography
        fontWeight="bold"
        color="primary.main"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
        variant="h4"
      >
        Etapa de cadastro
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <LinearProgress
          variant="determinate"
          value={pageForm}
          sx={{ width: "100%" }}
        />
        <Typography>{pageForm}%</Typography>
      </Box>
      {pageForm === 25 ? (
        <>
          <Typography
            fontWeight="bold"
            color="primary.main"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <LooksOneIcon sx={{ fontSize: 33 }} /> Dados pessoais
          </Typography>
          <div className={styles.inputGroup}>
            <InputTextComponent
              name="nome"
              label="Nome"
              placeholder="Digite o nome"
              control={control}
            />

            <InputTextComponent
              control={control}
              name="rg"
              label="RG"
              placeholder="Digite o RG"
            />

            <InputTextComponent
              name="CPF"
              label="CPF"
              placeholder="Digite o CPF"
              control={control}
            />
          </div>

          <div className={styles.inputGroup}>
            <InputTextComponent
              name="celular"
              label="Celular"
              placeholder="Digite o número celular"
              control={control}
            />

            <InputTextComponent
              name="dataEmissao"
              label="Data Emissão RG"
              placeholder="Digite a data de emissão do RG"
              control={control}
            />

            <div>
              <Select
                sx={estilosMUI}
                onChange={handleChange}
                value={rgSelect}
                {...register("orgaoRG")}
              >
                {orgaosRG.map((item) => (
                  <MenuItem value={item.sigla} key={item.sigla}>
                    {item.extenso}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>Selecione o orgão expedidor do RG</FormHelperText>
            </div>
          </div>
        </>
      ) : pageForm === 50 ? (
        <>
          <Typography
            fontWeight="bold"
            color="primary.main"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <LooksTwoIcon sx={{ fontSize: 33 }} /> Dados pessoais
          </Typography>
          <div className={styles.inputGroup}>
            <SelectComponent
              name="estadoCivil"
              control={control}
              listagem={[
                "Solteiro",
                "Casado",
                "Separado",
                "Divorciado",
                "Viuvo",
              ]}
              helperText="Selecione o estado civil"
            />

            <SelectComponent
              name="nacionalidade"
              control={control}
              listagem={nacionalidade}
              helperText="Selecione a nacionalidade"
            />

            <SelectComponent
              name="naturalidade"
              control={control}
              listagem={nacionalidade}
              helperText="Selecione a naturalidade"
            />
          </div>

          <div className={styles.inputGroup}>
            <InputTextComponent
              name="fotoAssinatura"
              label="Foto da assinatura"
              placeholder="Envie a sua assinatura digital"
              control={control}
            />

            <SelectComponent
              name="curso"
              control={control}
              listagem={cursos}
              helperText="Selecione o curso"
            />

            <InputTextComponent
              name="gestao"
              label="Gestão"
              placeholder="Selecione Gestão"
              control={control}
            />
          </div>
        </>
      ) : pageForm === 75 ? (
        <>
          <Typography
            fontWeight="bold"
            color="primary.main"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Looks3Icon sx={{ fontSize: 33 }} /> Endereço
          </Typography>
        </>
      ) : (
        <>
          <Typography
            fontWeight="bold"
            color="primary.main"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Looks4Icon sx={{ fontSize: 33 }} /> Detalhes administrativos
          </Typography>
          <div className={styles.inputGroup}>
            <InputTextComponent
              name="login"
              label="Login"
              placeholder="Digite o Login"
              control={control}
            />
            <InputTextComponent
              name="senha"
              label="Senha"
              placeholder="Digite a Senha"
              control={control}
            />

            <SelectComponent
              name="admin"
              control={control}
              listagem={["Sim", "Não"]}
              helperText="Essa conta terá privilegios de administrador? "
            />
          </div>
        </>
      )}

      <div>
        <Box sx={{ display: "flex", gap: "30px" }}>
          {pageForm >= 50 ? (
            <Button onClick={() => setPageForm((prevState) => prevState - 25)}>
              Voltar
            </Button>
          ) : (
            <Button onClick={() => navigate("/admin")}>Voltar</Button>
          )}

          {pageForm === 100 ? (
            <Button
              variant="contained"
              type="submit"
              sx={{ backgroundColor: "primary.main" }}
            >
              Submit
            </Button>
          ) : (
            <Button onClick={() => setPageForm((prevState) => prevState + 25)}>
              Avançar
            </Button>
          )}
        </Box>
      </div>
    </form>
  );
};

export default UsuarioForm;
