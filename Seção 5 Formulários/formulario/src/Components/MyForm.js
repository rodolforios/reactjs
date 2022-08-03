import './MyForm.css'
import {useState} from 'react'

const MyForm = () => {

  // Geraciamento de dados
  const [name,setName] = useState()
  const [email,setEmail] =useState()

  const handleName = (e)=>{
    setName(e.target.value)
  }
  

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("enviando formulário")
    console.log(name,email);
  }

  return (
    <div>
    {/* 5 - envio de form */}
    
        {/* 1 -Criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} />
            </div>
            {/* 2 -  Label envolvendo input */}
            <label>
            <span>E-mail</span>
            {/* 4 - Simplificação de manipulação */}
            <input type="email" name="email" placeholder="Digite seu e-mail" onChange={(e)=> setEmail(e.target.value)}/>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm