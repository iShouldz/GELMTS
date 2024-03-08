import { Button, TextField, IconButton, Select, MenuItem, InputLabel } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./reuniaoForm.module.css";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    data: yup.date().required(),
    horaInicio: yup.string().required(),
    topicos: yup.string().required(),
    projeto: yup.string().required(),
    equipe: yup.object().shape({
      orientador: yup.string().required(),
      orientandos: yup.array().of(yup.string().required()),
    }),
    urgencia: yup.string().oneOf(['baixa', 'média', 'alta']).required(),
  })
  .required();

const ReuniaoForm = () => {
  const {
    register,
    handleSubmit,
    control, // Adicionando control
    formState: { errors },
    watch,
    setValue
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { orientandos: [''], urgencia: ''}
  });

  const navigate = useNavigate();

  const handleCadastrarReuniao = (data) => {
    console.log(data);
  };

  const orientandos = watch("orientandos");

  const addOrientando = () => {
    setValue("orientandos", [...orientandos, '']);
  };

  return (
    <form
      onSubmit={handleSubmit(handleCadastrarReuniao)}
      className={styles.formReuniaoContainer}
    >
      <div className={styles.inputGroup}>
        <TextField
          id="data"
          label="Data"
          type="date"
          control={control}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          {...register("data")}
        />
        {errors.data && (
          <p className={styles.error}>{errors.data.message}</p>
        )}

        <TextField
          id="horaInicio"
          label="Hora de Início"
          placeholder="Digite a hora de início"
          variant="outlined"
          {...register("horaInicio")}
        />
        {errors.horaInicio && (
          <p className={styles.error}>{errors.horaInicio.message}</p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <TextField
          id="topicos"
          label="Tópicos"
          placeholder="Digite os tópicos"
          variant="outlined"
          {...register("topicos")}
        />
        {errors.topicos && (
          <p className={styles.error}>{errors.topicos.message}</p>
        )}

        <TextField
          id="projeto"
          label="Projeto"
          placeholder="Digite o projeto"
          variant="outlined"
          {...register("projeto")}
        />
        {errors.projeto && (
          <p className={styles.error}>{errors.projeto.message}</p>
        )}

        <InputLabel htmlFor="urgencia-select">Urgência</InputLabel>
        <Select
          id="urgencia-select"
          placeholder="Selecione a urgência"
          defaultValue=""
          {...register("urgencia")}
          labelId="urgencia-label"
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="baixa">Baixa</MenuItem>
          <MenuItem value="média">Média</MenuItem>
          <MenuItem value="alta">Alta</MenuItem>
        </Select>
        {errors.urgencia && (
          <p className={styles.error}>{errors.urgencia.message}</p>
        )}
      </div>

      <div className={styles.inputGroup}>
        {orientandos.map((orientando, index) => (
          <div key={index} className={styles.inputGroup}>
            <TextField
              id={`orientandos[${index}]`}
              label={`Orientando ${index + 1}`}
              placeholder="Selecione seu(s) orientando(s)"
              variant="outlined"
              {...register(`orientandos[${index}]`)}
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
