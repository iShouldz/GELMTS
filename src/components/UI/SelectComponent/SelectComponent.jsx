/* eslint-disable react/prop-types */
import { MenuItem, Select } from "@mui/material";
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
            InputLabelProps={{ style: { color: 'pink' } }}
            sx={{
              width: "13vw",
              minWidth: "100px",
              maxWidth: "400px",
              color: "#1A2E4F !important",
              "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "red"
              },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
                color: "purple"
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "purple"
              },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "purple"
              },
              "& .MuiInputLabel-root": {
                color: 'pink !important',
              },
              "& .MuiInputLabel-shrink": {
                color: 'pink !important',
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#1A2E4F",
                color: "#1A2E4F",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#FBA403 !important",
                color: "#1A2E4F !important",
              },
              "& input": {
                color: "#1A2E4F !important",
              },
              "& label": {
                color: "#1A2E4F !important",
                "&.Mui-focused": {
                  color: "#1A2E4F",
                },
                "&.MuiInputLabel-shrink": {
                  color: "#1A2E4F !important",
                  "&.Mui-focused": {
                    color: "#1A2E4F !important",
                  },
                  "&.Mui-error": {
                    color: "red",
                  },
                },
              },
            }}
            onChange={(e) => field.onChange(e.target.value)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        )}
      />
    </div>
  );
};

export default SelectComponent;
