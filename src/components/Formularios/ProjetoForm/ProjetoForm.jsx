/* eslint-disable react/prop-types */
import { Button, TextField, IconButton, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./projetoForm.module.css";
import InputTextComponent from "../../UI/InputTextComponent/InputTextComponent";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SelectComponent from "../../UI/SelectComponent/SelectComponent";
import {linguagensPro} from '../../../../utils/lists'
const schema = yup
  .object({
    // nome: yup.string().required(),
    // descricao: yup.string().required(),
    // participantes: yup.array().of(yup.string().required()),
    // antigosParticipantes: yup.array().of(yup.string().required()),
    // orientador: yup.string().required(),
    // scrumMaster: yup.string().required(),
    linguagens: yup.array().of(
      yup.object().shape({
        nome: yup.string(),
      })
    ),
  })
  .required();

const ProjetoForm = ({
  handleSubmitData,
  cadastro = false,
  certificacao = false,
}) => {
  const [linguagens, setLinguagens] = useState([{ nome: "" }]);

  const addLinguagens = () => {
    setLinguagens([...linguagens, { nome: "" }]);
  };

  const removeLinguagens = (index) => {
    const updatedAlunos = [...linguagens];
    updatedAlunos.splice(index, 1);
    setLinguagens(updatedAlunos);
  };
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { participantes: [""], antigosParticipantes: [""] },
  });

  console.log(errors);
  const [confirmModal, setConfirmModal] = useState(false);

  const handleClose = () => {
    setConfirmModal(false);
  };

  const handleGoBack = () => {
    navigate.goBack();
  };

  const handleCadastrarProjeto = (data) => {
    console.log(data);
  };

  const participantes = watch("participantes");
  const antigosParticipantes = watch("antigosParticipantes");

  const addParticipante = () => {
    setValue("participantes", [...participantes, ""]);
  };

  const addAntigoParticipante = () => {
    setValue("antigosParticipantes", [...antigosParticipantes, ""]);
  };

  {
    Object.keys(errors).length > 0 && (
      <div className={styles.errorContainer}>
        <p>Houve alguns erros no formulário:</p>
        <ul>
          {Object.keys(errors).map((fieldName, index) => (
            <li key={index}>{errors[fieldName].message}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <form
      // onSubmit={handleSubmit(handleCadastrarProjeto)}
      onSubmit={handleSubmit(handleSubmitData)}
      className={styles.formProjectContainer}
    >
      <div className={styles.inputGroup}>
        <InputTextComponent
          name="nome"
          label="Nome"
          placeholder="Digite seu Nome"
          control={control}
        />
        <InputTextComponent
          name="descricao"
          label="Descrição"
          placeholder="descreva aqui..."
          control={control}
        />
      </div>

      <div className={styles.inputGroup}>
        <InputTextComponent
          name="dataCriacao"
          type="Date"
          helperText="Selecione a data de criação do projeto"
          control={control}
        />

        {certificacao && (
          <InputTextComponent
            name="dataCertificacao"
            type="Date"
            helperText="Selecione a data de certificação do projeto"
            control={control}
          />
        )}
      </div>

      <Box sx={{display: 'flex', alignItems: 'center'}}>
        {linguagens.map((aluno, index) => (
          <>
            <Box
              key={index}
              sx={{ display: "flex", flexDirection: "row", gap: "20px" }}
            >
              <SelectComponent
                name={`linguagens[${index}].nome`}
                listagem={linguagensPro}
                helperText="Linguagem"
                control={control}
              />

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <IconButton onClick={addLinguagens}>
                  <PersonAddAlt1Icon />
                </IconButton>

                {index !== 0 && (
                  <IconButton onClick={() => removeLinguagens(index)}>
                    -
                  </IconButton>
                )}
              </Box>
            </Box>
          </>
        ))}
      </Box>
      <div className={styles.inputGroup}>
        <InputTextComponent
          name="camposAplicacao"
          label="Campos de aplicação"
          placeholder="Digite os campos de aplicação"
          control={control}
        />

        <SelectComponent
          name="tipoAplicacao"
          listagem={["Javascript"]}
          helperText="Selecione o tipo de aplicação"
          control={control}
        />
      </div>

      <div className={styles.inputGroup}>
        <InputTextComponent
          name="palavrasChave"
          label="Palavras-chave"
          placeholder="Digite as palavras chaves do projeto"
          control={control}
        />
        <SelectComponent
          name="status"
          listagem={["Ativo", "Finalizado"]}
          helperText="Selecione o status do projeto"
          control={control}
        />
      </div>

      {/* <div className={styles.inputGroup}>
        <div>
          {antigosParticipantes.map((antigoParticipante, index) => (
            <div key={index} className={styles.participante}>
              <TextField
                id={`antigosParticipantes[${index + 1}]`}
                label={`Antigo Participante ${index + 1}`}
                placeholder="Selecione um participante"
                {...register(`antigosParticipantes[${index}]`)}
              />
            </div>
          ))}

          <IconButton onClick={addAntigoParticipante}>
            <PersonAddAlt1Icon />
          </IconButton>
        </div>
        <div>
          {participantes.map((participante, index) => (
            <div key={index} className={styles.participante}>
              <TextField
                id={`participantes[${index}]`}
                label={`Participante ${index + 1}`}
                placeholder="Selecione um participante"
                variant="outlined"
                {...register(`participantes[${index}]`)}
              />
            </div>
          ))}

          <IconButton onClick={addParticipante}>
            <PersonAddAlt1Icon />
          </IconButton>
        </div>
      </div> */}

      <div className={styles.inputGroup}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "primary.main" }}
          onClick={() => navigate("/projeto")}
        >
          Voltar
        </Button>

        <Button
          variant="contained"
          // onClick={() => setConfirmModal(true)}
          type="submit"
          sx={{ backgroundColor: "primary.main" }}
        >
          Enviar
        </Button>
      </div>
    </form>
  );
};

export default ProjetoForm;
