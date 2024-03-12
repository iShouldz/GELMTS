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
  Alert,
  Box,
  Button,
  FormControlLabel,
  FormHelperText,
  LinearProgress,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Step,
  Stepper,
  Typography,
} from "@mui/material";
import styles from "./usuarioform.module.css";
import { useEffect, useState } from "react";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";
import ErrosForm from "../ErrorsForm/ErrosForm";
import ModalConfirmation from "../ModalConfirmation/ModalConfirmation";
import { cidadeEstado } from "../../../utils/lists";

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
    role: yup.string().required(),
    matricula: yup.string().when("role", {
      is: "estudante",
      then: (schema) => schema.required("Digite a matricula"),
      otherwise: (schema) => schema.notRequired(),
    }),
    atividade: yup.string().when("role", {
      is: "estudante",
      then: (schema) => schema.required("Selecione a atividade"),
      otherwise: (schema) => schema.notRequired(),
    }),
    vinculo: yup.string().when("role", {
      is: "estudante",
      then: (schema) => schema.required("Selecione o vinculo"),
      otherwise: (schema) => schema.notRequired(),
    }),
    funcao: yup.string().when("role", {
      is: "estudante",
      then: (schema) => schema.required("Selecione a função"),
      otherwise: (schema) => schema.notRequired(),
    }),
    horarioAtividade: yup.string().when("role", {
      is: "estudante",
      then: (schema) => schema.required("Selecione um horario de atividade"),
      otherwise: (schema) => schema.notRequired(),
    }),
    especialidade: yup.string().when("role", {
      is: "professor",
      then: (schema) => schema.required("Digite a especialidade"),
      otherwise: (schema) => schema.notRequired(),
    }),
    rua: yup.string().required(),
    numero: yup.string().required(),
    cidade: yup.string().required(),
    estado: yup.string().required(),
    cep: yup.string().required(),
  })
  .required();

const UsuarioForm = ({ handleSubmitData, type }) => {
  const navigate = useNavigate();
  const [rgSelect, setRgSelect] = useState();
  const [pageForm, setPageForm] = useState(0);
  const [confirm, setConfirm] = useState(false);
  const [radioValue, setRadioValue] = useState();
  const [selectedEstado, setSelectedEstado] = useState();
  const [selectedCity, setSelectedCity] = useState();

  console.log(radioValue);
  const handleChange = (event) => {
    setRgSelect(event.target.value);
  };

  const handleChangeRadio = (event) => {
    setRadioValue(event.target.value);
  };

  const handleChangeEstado = (event) => {
    setSelectedEstado(event.target.value);
  };

  const handleChangeCity = (event) => {
    setSelectedCity(event.target.value);
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const errorFields = Object.keys(errors).map((fieldName) => {
    return { field: fieldName, message: errors[fieldName]?.message };
  });
  console.log(errors);
  const numberOfErrors = Object.keys(errors).length;

  useEffect(() => {
    if (numberOfErrors >= 1 && pageForm === 100) {
      // setConfirm(true);
    }
  }, [numberOfErrors, pageForm]);
  console.log(selectedEstado);
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
            >
              <ErrosForm errors={errors?.nome?.message} />
            </InputTextComponent>

            <InputTextComponent
              control={control}
              name="rg"
              label="RG"
              placeholder="Digite o RG"
            >
              <ErrosForm errors={errors?.rg?.message} />
            </InputTextComponent>
          </div>

          <div className={styles.inputGroup}>
            <InputTextComponent
              name="CPF"
              label="CPF"
              placeholder="Digite o CPF"
              control={control}
            >
              <ErrosForm errors={errors?.CPF?.message} />
            </InputTextComponent>
            <InputTextComponent
              name="celular"
              label="Celular"
              placeholder="Digite o número celular"
              control={control}
            >
              <ErrosForm errors={errors?.celular?.message} />
            </InputTextComponent>
          </div>
          <div className={styles.inputGroup}>
            <InputTextComponent
              name="dataEmissao"
              label="Data Emissão RG"
              placeholder="Digite a data de emissão do RG"
              control={control}
            >
              <ErrosForm errors={errors?.dataEmissao?.message} />
            </InputTextComponent>

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
          </div>

          <div className={styles.inputGroup}>
            <SelectComponent
              name="naturalidade"
              control={control}
              listagem={nacionalidade}
              helperText="Selecione a naturalidade"
            />
            <InputTextComponent
              name="fotoAssinatura"
              label="Foto da assinatura"
              placeholder="Envie a sua assinatura digital"
              control={control}
            >
              <ErrosForm errors={errors?.fotoAssinatura?.message} />
            </InputTextComponent>
          </div>

          <div className={styles.inputGroup}>
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
            >
              <ErrosForm errors={errors?.gestao?.message} />
            </InputTextComponent>
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

          <div className={styles.inputGroup}>
            <InputTextComponent
              name="rua"
              label="Rua"
              placeholder="Digite a Rua"
              control={control}
            >
              <ErrosForm errors={errors?.rua?.message} />
            </InputTextComponent>

            <InputTextComponent
              name="numero"
              label="Numero"
              placeholder="Digite o numero da casa"
              control={control}
            >
              <ErrosForm errors={errors?.numero?.message} />
            </InputTextComponent>

            <SelectComponent
              name="cep"
              control={control}
              listagem={["teste"]}
              helperText="Selecione a rua"
            />
          </div>

          <div className={styles.inputGroup}>
            <div>
              <Select
                sx={estilosMUI}
                value={selectedEstado}
                onChange={handleChangeEstado}
                {...register("estado")}
              >
                {cidadeEstado.estados.map((itemEstado) => (
                  <MenuItem value={itemEstado.sigla} key={itemEstado.sigla}>
                    {itemEstado.sigla}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>Selecione o Estado</FormHelperText>
            </div>

            {/* <Select
              value={selectedCity}
              onChange={handleChangeCity}
              {...register("cidade")}
            >
              {cidadeEstado.estados.map((itemEstado) =>
                itemEstado.sigla == selectedEstado
                  ? itemEstado.cidades.map((cidade) => (
                      <MenuItem value={cidade} key={cidade}>
                        {cidade}
                      </MenuItem>
                    ))
                  : ""
              )}
            </Select> */}
            <SelectComponent
              name="cidade"
              control={control}
              listagem={["teste"]}
              helperText="Selecione a cidade"
            />
          </div>
        </>
      ) : pageForm === 100 ? (
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
            <Looks4Icon sx={{ fontSize: 33 }} /> Configurações finais
          </Typography>

          {radioValue === "estudante" ? (
            <>
              <div className={styles.inputGroup}>
                <InputTextComponent
                  name="matricula"
                  label="Matricula"
                  placeholder="Digite a matricula"
                  control={control}
                >
                  <ErrosForm errors={errors?.matricula?.message} />
                </InputTextComponent>

                <SelectComponent
                  name="atividade"
                  control={control}
                  listagem={["teste"]}
                  helperText="Selecione a atividade"
                />

                <SelectComponent
                  name="vinculo"
                  control={control}
                  listagem={["teste"]}
                  helperText="Selecione um vinculo"
                />
              </div>

              <div className={styles.inputGroup}>
                <SelectComponent
                  control={control}
                  listagem={["teste"]}
                  name="funcao"
                  label="Função"
                  helperText="Selecione uma função"
                />
                <SelectComponent
                  control={control}
                  listagem={["teste"]}
                  name="horarioAtividade"
                  label="Horario de atividade"
                  helperText="Selecione um horario"
                />
              </div>
            </>
          ) : (
            <div className={styles.inputGroup}>
              <SelectComponent
                name="especialidade"
                label="Especialidade"
                listagem={["teste"]}
                helperText="Digite a especialidade"
                control={control}
              />
            </div>
          )}

          <Box
            sx={{
              backgroundColor: "#1A2E4F10",
              padding: "30px",
              borderRadius: "20px",
            }}
          >
            <Typography>Zona administrativa</Typography>
            <div className={styles.inputGroup}>
              <InputTextComponent
                name="login"
                label="Login"
                placeholder="Digite o Login"
                control={control}
              >
                <ErrosForm errors={errors?.login?.message} />
              </InputTextComponent>

              <InputTextComponent
                name="senha"
                label="Senha"
                placeholder="Digite a Senha"
                control={control}
              >
                <ErrosForm errors={errors?.senha?.message} />
              </InputTextComponent>
              <SelectComponent
                name="admin"
                control={control}
                listagem={["Sim", "Não"]}
                helperText="Essa conta terá privilegios de administrador? "
              />
            </div>
          </Box>
        </>
      ) : (
        <>
          <Typography variant="h5">
            Selecione o tipo de usuario a ser criado
          </Typography>

          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={radioValue}
            onChange={handleChangeRadio}
          >
            <FormControlLabel
              control={<Radio />}
              label="Estudante"
              labelPlacement="end"
              value="estudante"
              name="radio-buttons"
              {...register("role")}
            />
            <FormControlLabel
              control={<Radio />}
              label="Professor"
              labelPlacement="end"
              value="professor"
              name="radio-buttons"
              {...register("role")}
            />
          </RadioGroup>
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

      <ModalConfirmation
        handleClose={() => setConfirm(false)}
        controlDialog={confirm}
        actionButton="Entendido"
        title="Campos invalidos!"
      >
        <Typography fontWeight="bold">Verifique os campos abaixo</Typography>

        <Typography>
          Os campos abaixo estão invalidos e devem ser revisados.
        </Typography>
        <Box>
          {errorFields.map((erro) => (
            <Alert severity="warning" key={erro.field}>
              {erro.field} - {erro.message}
            </Alert>
          ))}
        </Box>
      </ModalConfirmation>
    </form>
  );
};

export default UsuarioForm;
