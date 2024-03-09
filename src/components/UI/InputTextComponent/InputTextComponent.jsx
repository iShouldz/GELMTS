/* eslint-disable react/prop-types */
import { FormHelperText, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const InputTextComponent = ({ name, control, helperText = "", ...rest }) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <TextField
              {...field}
              {...rest}
              value={field.value || ""}
              sx={{
                width: "33vw",
                minWidth: "100px",
                maxWidth: "400px",
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
              onChange={(e) => field.onChange(e.target.value)}
            />
            <FormHelperText>{helperText}</FormHelperText>
          </>
        )}
      />
    </div>
  );
};

export default InputTextComponent;
