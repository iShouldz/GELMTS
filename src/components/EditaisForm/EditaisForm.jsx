/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputTextComponent from "../UI/InputTextComponent/InputTextComponent";
import styles from "../VinculoForm/vinculoform.module.css";
import SelectComponent from "../../components/UI/SelectComponent/SelectComponent";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import {
  Alert,
  Box,
  Button,
  IconButton,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import PersonRemoveAlt1Icon from "@mui/icons-material/PersonRemoveAlt1";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const schema = yup
  .object({
    descricao: yup.string().required("Descrição é obrigatória"),
    edital: yup.string().required("Edital é obrigatório"),
    inicioEdital: yup.date().required("Data de início é obrigatória"),
    fimEdital: yup.date().required("Data de término é obrigatória"),
    alunos: yup.array().of(
      yup.object().shape({
        nome: yup.string(),
        matricula: yup.string(),
        rg: yup.string(),
      })
    ),
  })
  .required();

const EditaisForm = ({ handleSubmitData, cadastro = false }) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const [alunos, setAlunos] = useState([{ nome: "", matricula: "", rg: "" }]);

  const addAluno = () => {
    setAlunos([...alunos, { nome: "", matricula: "", rg: "" }]);
  };

  const removeAluno = (index) => {
    const updatedAlunos = [...alunos];
    updatedAlunos.splice(index, 1);
    setAlunos(updatedAlunos);
  };
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(handleSubmitData)}
      className={styles.formContainer}
    >
      <div className={styles.inputGroup}>
        <InputTextComponent
          name="descricao"
          label="Descrição"
          multiline
          placeholder="Digite a descrição do edital"
          control={control}
        />

        <InputTextComponent
          name="edital"
          type="file"
          helperText="Selecione o edital para enviar"
          control={control}
        />
      </div>

      <div className={styles.inputGroup}>
        <InputTextComponent
          name="inicioEdital"
          helperText="Selecione a data de inicio do edital"
          type="Date"
          control={control}
        />

        <InputTextComponent
          name="fimEdital"
          helperText="Selecione a data de fim do edital"
          type="Date"
          control={control}
        />
      </div>
      {cadastro && (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              backgroundColor: "#1A2E4F10",
              padding: "30px",
              borderRadius: "30px",
            }}
          >
            <Typography variant="h5" fontWeight="bold" color="primary.main">
              Alunos aprovados
            </Typography>
            <Alert>
              Preencha com os alunos aprovados no edital
            </Alert>
            {alunos.map((aluno, index) => (
              <Box
                key={index}
                sx={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <InputTextComponent
                  name={`alunos[${index}].nome`}
                  label={`Nome do Aluno ${index + 1}`}
                  placeholder="Digite o nome do aluno"
                  control={control}
                />

                <InputTextComponent
                  name={`alunos[${index}].matricula`}
                  label={`Matrícula do Aluno ${index + 1}`}
                  placeholder="Digite a matrícula do aluno"
                  control={control}
                />
                <InputTextComponent
                  name={`alunos[${index}].rg`}
                  label={`RG do Aluno ${index + 1}`}
                  placeholder="Digite o RG do aluno"
                  control={control}
                />

                <IconButton onClick={addAluno}>
                  <PersonAddAlt1Icon />
                </IconButton>

                {index !== 0 && (
                  <IconButton onClick={() => removeAluno(index)}>
                    <PersonRemoveAlt1Icon />
                  </IconButton>
                )}
              </Box>
            ))}
          </Box>
        </>
      )}

      <Box sx={{ display: "flex", gap: "30px" }}>
        {cadastro ? (
          <Button
            variant="contained"
            sx={{ backgroundColor: "primary.main" }}
            onClick={() => navigate("/vinculo")}
          >
            Voltar
          </Button>
        ) : (
          ""
        )}

        <Button
          variant="contained"
          type="submit"
          sx={{ backgroundColor: "primary.main" }}
        >
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default EditaisForm;
