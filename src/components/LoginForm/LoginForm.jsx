/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, TextField } from "@mui/material";
import styles from "./loginForm.module.css";

const schema = yup
  .object({
    login: yup.string().required(),
    senha: yup.string().required(),
  })
  .required();

const LoginForm = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmit)}
      className={styles.formItensContainer}
    >
      <TextField
        name="login"
        label="Login"
        placeholder="Digite seu login"
        sx={{
          color: "#1A2E4F !important",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1A2E4F",
            color: "#1A2E4F",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FBA403 !important",
            color: "#1A2E4F !important",
          },
          "& input": {
            color: "#1A2E4F",
          },
          "& label": {
            color: "secondary.labelColor",
            "&.Mui-focused": {
              color: "#1A2E4F",
            },
            "&.MuiInputLabel-shrink": {
              color: "#1A2E4F !important",
              "&.Mui-focused": {
                color: "#FBA403",
              },
              "&.Mui-error": {
                color: "red",
              },
            },
          },
        }}
      />

      <TextField
        name="senha"
        label="Senha"
        type="password"
        placeholder="Digite sua senha"
        sx={{
          color: "#1A2E4F !important",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1A2E4F",
            color: "#1A2E4F",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FBA403 !important",
            color: "#1A2E4F !important",
          },
          "& input": {
            color: "#1A2E4F",
          },
          "& label": {
            color: "secondary.labelColor",
            "&.Mui-focused": {
              color: "#1A2E4F",
            },
            "&.MuiInputLabel-shrink": {
              color: "#1A2E4F !important",
              "&.Mui-focused": {
                color: "#FBA403",
              },
              "&.Mui-error": {
                color: "red",
              },
            },
          },
        }}
      />
      <Button type="submit" variant="contained">
        Entrar
      </Button>
    </form>
  );
};

export default LoginForm;
