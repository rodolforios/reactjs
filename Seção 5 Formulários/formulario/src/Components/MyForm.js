import './MyForm.css'
import { useState } from 'react'

const MyForm = ({ user }) => {
  //6 - controlled inputs


  //3 - Geraciamento de dados
  const [name, setName] = useState(user ? user.name : '')
  const [email, setEmail] = useState(user ? user.email : '')
  const [bio, setBio] = useState(user ? user.bio : '');
  const [role, setRole] = useState("");


  const handleName = (e) => {
    setName(e.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviando formulário")
    console.log(name, email, bio,role);

    setName(' ');
    setEmail(' ');
    setBio(' ');
  }


  //7 - limpar form


  return (
    <div>
      {/* 5 - envio de form */}

      {/* 1 -Criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} value={name} />
        </div>
        {/* 2 -  Label envolvendo input */}
        <label>
          <span>E-mail</span>
          {/* 4 - Simplificação de manipulação */}
          <input type="email" name="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email} />
        </label>

        {/*8 - Bio textarea */}
        <label htmlFor="bio" >
          <span>Bio:</span>
          <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
        </label>

        {/* 9 - Select */}
        <label>
          <span>Função no sistema</span>
          <select name="role" onChange={(e) =>setRole(e.target.value)}>
            <option value="user">Usuário</option>
            <option value="Editor">Editor</option>
            <option value="Admin">Admin</option>
          </select>
        </label>

        <input type="submit" value="Enviar" />

      </form>
    </div>
  )
}

export default MyForm