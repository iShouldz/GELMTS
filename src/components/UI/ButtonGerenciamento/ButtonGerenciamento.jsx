/* eslint-disable react/prop-types */
import { Button } from "@mui/material"

const ButtonGerenciamento = ({children}) => {
  return (
    <Button variant="contained" sx={{width: '250px', height: '200px'}}>
        {children}
    </Button>
  )
}

export default ButtonGerenciamento