import { Button, IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./reuniaoForm.module.css";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import InputTextComponent from "../UI/InputTextComponent/InputTextComponent";
import SelectComponent from "../UI/SelectComponent/SelectComponent";

import { urgencia } from "../../../utils/lists";

const schema = yup
  .object({
    data: yup.date().required(),
    horaInicio: yup.string().required(),
    topicos: yup.array().of(yup.string().required()),
    projeto: yup.string().required(),
    orientador: yup.string().required(),
    orientandos: yup.array().of(yup.string().required()),
    urgencia: yup.string().oneOf(['baixa', 'média', 'alta']).required(),
  })
  .required();

const ReuniaoForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { orientandos: [''], topicos: [''] }
  });

  console.log(errors);

  const navigate = useNavigate();

  const handleCadastrarReuniao = (data) => {
    console.log(data);
  };

  const orientandos = watch("orientandos");

  const addOrientando = () => {
    setValue("orientandos", [...orientandos, '']);
  };

  const topicos = watch("topicos");

  const addTopico = () => {
    setValue("topicos", [...topicos, '']);
  }

  return (
    <form
      onSubmit={handleSubmit(handleCadastrarReuniao)}
      className={styles.formReuniaoContainer}
    >
      <div className={styles.inputGroup}>
        <InputTextComponent
          name="data"
          label="Data"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          {...register("data")}
          control={control}
        />

        <InputTextComponent
          name="horaInicio"
          label="Hora de Início"
          placeholder="Digite a hora de início"
          variant="outlined"
          {...register("horaInicio")}
          control={control}
        />

        {/* FAZER SELECT DA LISTA DE PROJETOS*/}
        <InputTextComponent
          name="projeto"
          label="Projeto"
          placeholder="Digite o projeto"
          variant="outlined"
          {...register("projeto")}
          control={control}
        />
      </div>

      <div className={styles.inputGroup}>
        {topicos.map((topico, index) => (
          <div key={index} className={styles.inputGroup}>
            <InputTextComponent
              name={`topicos[${index}]`}
              label={`Topico ${index + 1}`}
              variant="outlined"
              {...register(`topicos[${index}]`)}
              control={control}
            />
          </div>
        ))}
        <IconButton onClick={addTopico}>
          <AddIcon />
        </IconButton>
      </div>

      <div className={styles.inputGroup}>
        <SelectComponent
          name="urgencia"
          label="Urgência"
          placeholder="Selecione a urgência"
          listagem={urgencia}
          defaultValue=""
          {...register("urgencia")}
          control={control}
        />

        {/* FAZER SELECT DA LISTA DE ORIENTADORES*/}
        <SelectComponent
          name="orientador"
          label="Orientador"
          placeholder="Digite o nome do orientador"
          variant="outlined"
          {...register("orientador")}
          control={control}
        />
      </div>

      <div className={styles.inputGroup}>
        {orientandos.map((orientando, index) => (
          <div key={index} className={styles.inputGroup}>
          {/* FAZER SELECT DA LISTA DE ORIENTANDOS*/}
            <InputTextComponent
              name={`orientandos[${index}]`}
              label={`Orientando ${index + 1}`}
              variant="outlined"
              {...register(`orientandos[${index}]`)}
              control={control}
            />
          </div>
        ))}

        <IconButton onClick={addOrientando}>
          <PersonAddAlt1Icon />
        </IconButton>
      </div>

      <div>
        <Button
          type="submit"
          variant="contained"
          sx={{ backgroundColor: "primary.main" }}
          onClick={() => navigate("/reunião")}
        >
          Voltar
        </Button>

        <Button
          type="submit"
          variant="contained"
          sx={{ backgroundColor: "primary.main" }}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ReuniaoForm;