/* eslint-disable react/prop-types */
import ErrorIcon from "@mui/icons-material/Error";
import { Typography } from "@mui/material";

const ErrosForm = ({ errors }) => {
  return (
    errors !== undefined && (
      <Typography sx={{display: 'flex', gap: '10px', alignItems: 'center', color: 'red'}}>
        <ErrorIcon />
        {errors}
      </Typography>
    )
  );
};

export default ErrosForm;
