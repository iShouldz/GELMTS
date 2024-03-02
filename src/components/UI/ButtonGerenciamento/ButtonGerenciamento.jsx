/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const ButtonGerenciamento = ({ children, path, icon }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Button
      variant="contained"
      sx={{ width: "250px", height: "200px", display: 'flex', flexDirection: 'column'}}
      onClick={() => handleNavigate(path)}
    >
      {icon} {children}
    </Button>
  );
};

export default ButtonGerenciamento;
