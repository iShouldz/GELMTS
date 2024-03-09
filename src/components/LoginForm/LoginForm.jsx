/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, TextField } from "@mui/material";
import styles from "./loginForm.module.css";
import { useDispatch } from "react-redux";
import userSlice, { userActions } from "../../store/login/loginSlice";

const schema = yup
  .object({
    login: yup.string().required(),
    senha: yup.string().required(),
  })
  .required();

const LoginForm = () => {
  const dispatch = useDispatch()
  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (data) => {
    console.log(data);
    dispatch(userActions.handleUpdateLogin())
    
  };

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className={styles.formItensContainer}
    >
      <TextField
        name="login"
        label="Login"
        {...register("login")}
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
        {...register("senha")}
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
