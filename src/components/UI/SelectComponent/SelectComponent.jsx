/* eslint-disable react/prop-types */
import { Select} from "@mui/material";
import { Controller } from "react-hook-form";

const SelectComponent = ({ name, control, ...rest }) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            {...rest}
            select
            value={field.value || ""}
            sx={{color: "white",
            width: "100%",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
              color: "white",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#FBA403 !important",
              color: "white !important",
            },
            "& input": {
              color: "white",
            },
            "& label": {
              color: "secondary.labelColor",
              "&.Mui-focused": {
                color: "white",
              },
              "&.MuiInputLabel-shrink": {
                color: "white",
                "&.Mui-focused": {
                  color: "#FBA403",
                },
                "&.Mui-error": {
                  color: "red",
                },
              },
            },}}
            onChange={(e) => field.onChange(e.target.value)}
          >
             <option>
              oi
            </option>
          </Select>
        )}
      />
    </div>
  );
};

export default SelectComponent;
