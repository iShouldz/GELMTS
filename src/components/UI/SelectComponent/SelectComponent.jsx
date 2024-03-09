/* eslint-disable react/prop-types */
import { FormHelperText, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";

import { estilosMUI } from "../../../../utils/lists";
const SelectComponent = ({ name, control, listagem = [], helperText='', ...rest }) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <Select
              {...field}
              {...rest}
              select
              value={field.value || ""}
              InputLabelProps={{ style: { color: "pink" } }}
              sx={estilosMUI}
              onChange={(e) => field.onChange(e.target.value)}
            >
              {listagem.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{helperText}</FormHelperText>
          </>
        )}
      />
    </div>
  );
};

export default SelectComponent;
