

const carros = ({marca,cor,ano}) => {
  return (
    <div>
         <h2>{(marca)}</h2>
        <p>cor:{cor}</p>
        <p>ano:{ano}</p>
        {/* {ano = 2022 ? <p>Pode tirar a Habilitação</p>:<p>Não pode tirar a Habilitação</p>} */}
    </div>
  )
}

export default carros