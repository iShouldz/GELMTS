import { Button, TextField, IconButton} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./projetoForm.module.css";
import InputTextComponent from "../UI/InputTextComponent/InputTextComponent";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const schema = yup
  .object({
    nome: yup.string().required(),
    descricao: yup.string().required(),
    participantes: yup.array().of(
      yup.string().required()
    ),
    antigosParticipantes: yup.array().of(
      yup.string().required()
    ),
    orientador: yup.string().required(),
    scrumMaster: yup.string().required(),
  })
  .required();

const ProjetoForm = ({ handleSubmitData, cadastro = false }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { participantes: [''], antigosParticipantes: [''] }
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
    setValue("participantes", [...participantes, '']);
  };

  const addAntigoParticipante = () => {
    setValue("antigosParticipantes", [...antigosParticipantes, '']);
  };

  {Object.keys(errors).length > 0 && (
    <div className={styles.errorContainer}>
      <p>Houve alguns erros no formulário:</p>
      <ul>
        {Object.keys(errors).map((fieldName, index) => (
          <li key={index}>{errors[fieldName].message}</li>
        ))}
      </ul>
    </div>
  )}

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
          name="participante"
          label="Participante"
          placeholder="Selecione um participante"
          control={control}
        />
        <InputTextComponent
          name="scrumMaster"
          label="Scrum Master"
          placeholder="Selecione um Scrum Master"
          control={control}
        />
      </div>

      <div className={styles.inputGroup}>
        <InputTextComponent
          name="orientador"
          label="Orientador"
          placeholder="Selecione um orientador"
          control={control}
        />
      </div>

      <div className={styles.inputGroup}>
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
      </div>

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
