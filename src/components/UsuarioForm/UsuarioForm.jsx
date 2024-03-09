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
import { Button, FormHelperText, MenuItem, Select } from "@mui/material";
import styles from "./usuarioform.module.css";
import { useState } from "react";

const schema = yup
  .object({
    nome: yup.string().required(),
    cpf: yup.number().required(),
    curso: yup.string().required(),
    orientador: yup.string().required(),
    projeto: yup.string().required(),
    login: yup.string().required(),
    senha: yup.string().required(),
  })
  .required();

const UsuarioForm = ({ handleSubmitData }) => {
  const navigate = useNavigate();
  const [rgSelect, setRgSelect] = useState();

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

  return (
    <form
      onSubmit={handleSubmit(handleSubmitData)}
      className={styles.formContainer}
    >
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

        <InputTextComponent
          name="gestao"
          label="Gestão"
          placeholder="Selecione Gestão"
          control={control}
        />
        <InputTextComponent
          name="nome"
          label="Nome"
          placeholder="Digite o nome"
          control={control}
        />
      </div>

      <div className={styles.inputGroup}>
        <SelectComponent
          name="curso"
          control={control}
          listagem={cursos}
          helperText="Selecione o curso"
        />
        <InputTextComponent
          name="celular"
          label="Celular"
          placeholder="Digite o número celular"
          control={control}
        />

        <InputTextComponent
          control={control}
          name="rg"
          label="RG"
          placeholder="Digite o RG"
        />
        <div>
          <Select sx={estilosMUI} onChange={handleChange} value={rgSelect}>
            {orgaosRG.map((item) => (
              <MenuItem value={item.sigla} key={item.sigla}>
                {item.extenso}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Selecione o orgão expedidor do RG</FormHelperText>
        </div>
      </div>

      <div className={styles.inputGroup}>
        <InputTextComponent
          name="dataEmissao"
          label="Data Emissão RG"
          placeholder="Digite a data de emissão do RG"
          control={control}
        />

        <InputTextComponent
          name="CPF"
          label="CPF"
          placeholder="Digite o CPF"
          control={control}
        />

        <InputTextComponent
          name="fotoAssinatura"
          label="Foto da assinatura"
          placeholder="Envie a sua assinatura digital"
          control={control}
        />

        <SelectComponent
          name="estadoCivil"
          control={control}
          listagem={["Solteiro", "Casado", "Separado", "Divorciado", "Viuvo"]}
          helperText="Selecione o estado civil"
        />
      </div>

      <div className={styles.inputGroup}>
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

        <SelectComponent
          name="admin"
          control={control}
          listagem={["Sim", "Não"]}
          helperText="Essa conta terá privilegios de administrador? "
        />

        <SelectComponent
          name="naturalidade"
          control={control}
          listagem={nacionalidade}
          helperText="Selecione a naturalidade"
        />
      </div>

      <div>
        {/* {cadastro && (
          <Button
            variant="contained"
            sx={{ backgroundColor: "primary.main" }}
            onClick={() => navigate("/estudantes")}
          >
            Voltar
          </Button>
        )} */}

        <Button
          variant="contained"
          // onClick={() => setConfirmModal(true)}
          type="submit"
          sx={{ backgroundColor: "primary.main" }}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default UsuarioForm;
