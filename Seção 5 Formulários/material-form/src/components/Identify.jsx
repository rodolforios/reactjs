import React from 'react'
import TextField from '@mui/material/TextField';

const Identify = () => {
  return (
    <div>

      <h1>FICHA DE DADOS PESSOAIS</h1>
      
      <TextField fullWidth id="standard-basic" label="Nome" variant="standard" /> <br/>
      <TextField fullWidth id="standard-basic" label="Nome do Pai" variant="standard" /> <br/>
      <TextField fullWidth id="standard-basic" label="Nome da Mãe" variant="standard" /> <br/>
    
    </div>
  )
}

export default Identify