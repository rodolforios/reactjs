
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
      {/*Props Destructuring*/}
      <CarDetails brand="VW" km={10000} color="Azul" newCar={false}/>
      {/*Reaproveitando*/}
      <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true}/>
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false}/>

    </div>
  );
}

export default App;
