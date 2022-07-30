
import './App.css';
import City from './assets/city.jpg'
import ConditionalRender from './Components/ConditionalRender';
import ListRender from './Components/ListRender';
import ManageData from './Components/ManageData';
import ShowUserName from './Components/ShowUserName';

function App() {
  const name = "Joaquim"
  
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
      <ManageData/>
      <hr />
      <ListRender/>
      <hr />
      <ConditionalRender/>
      <hr />
      <ShowUserName name="Rodolfo"/>
      <ShowUserName name ={name}/>
    </div>
  );
}

export default App;
