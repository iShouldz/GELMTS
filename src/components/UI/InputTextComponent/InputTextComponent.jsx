/* eslint-disable react/prop-types */
import { TextField } from "@mui/material"
import { Controller } from "react-hook-form"

const InputTextComponent = ({name, control, ...rest}) => {
  return (
    <div>
        <Controller
        name={name}
        control={control}
        render={({ field }) => <TextField
            {...field}
            {...rest}
            value={field.value || ''}
            onChange={(e) => field.onChange(e.target.value)}
          />}
      />
    </div>
  )
}

export default InputTextComponent
