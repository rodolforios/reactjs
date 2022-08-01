
import { useState } from 'react';
import './App.css';
import City from './assets/city.jpg'
import CarDetails from './Components/CarDetails';
import ConditionalRender from './Components/ConditionalRender';
import ListRender from './Components/ListRender';
import ManageData from './Components/ManageData';
import ShowUserName from './Components/ShowUserName';

function App() {
  const name = "Joaquim"
  const [userName] = useState("Maria")
  const cars = [
    {id:1,brand:"Ferrari",color:"Amarela",newCar:true,km:0},
    {id:2,brand:"KIA",color:"Branco",newCar:false,km:7500},
    {id:3,brand:"Renault",color:"Azul",newCar:false,km:4321}
  
  
  ]

  return (
    <div className="App">
      <h1>Avançando em React</h1>

      {/*Imagem em public */}

      <div>
        <img src="/img1.jpg" alt="Paisagem" />

      </div>
      <hr />
      {/*Imagem em assets*/}

      <div>
        <img src={City} alt="Cidade" />

      </div>
      <hr />
      <ManageData />
      <hr />
      <ListRender />
      <hr />
      <ConditionalRender />
      <hr />
      {/*Props */}
      <ShowUserName name="Rodolfo" />
      <ShowUserName name={name} />
      <ShowUserName name={userName} />
      <hr />
      {/*Props Destructuring*/}
      <CarDetails brand="VW" km={10000} color="Azul" newCar={false} />
      <hr />
      {/*Reaproveitando*/}
      <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true} />
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false} />
      <hr />
      {/* Reutilização com loops */}
      {cars.map((car)=>(
        <CarDetails brand={car.brand} color={car.color} km={car.km} newCar={car.newCar}/>
      ))}

    </div>
  );
}

export default App;
