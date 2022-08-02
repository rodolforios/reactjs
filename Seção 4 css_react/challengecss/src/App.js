
import './App.css';
import './components/Carros.js'


function App() {
  const veiculos = [
    {id:1,marca:"Ford",cor:"Vermelhor",ano:2020},
    {id:2,marca:"Chevrolet",cor:"Preto",ano:2015},
    {id:3,marca:"Volkswagen",cor:"Vermelhor",ano:2022}
  ]
  return (
    <div className="App">
    <h1>Desafio CSS</h1>

      {veiculos.map((car) =>(
          <carros key = {car.id} Marca = {car.marca} cor ={car.cor} Ano ={car.ano}/>

        ))}
        
    </div>
  );
}

export default App;
