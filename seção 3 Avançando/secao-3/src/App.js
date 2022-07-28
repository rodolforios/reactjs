
import './App.css';
import City from './assets/city.jpg'
import ListRender from './Components/ListRender';
import ManageData from './Components/ManageData';

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>

      {/*Imagem em public */}

      <div>
        <img src="/img1.jpg" alt="Paisagem" />

      </div>

      {/*Imagem em assets*/}

      <div>
        <img src={City} alt="Cidade" />

      </div>
      <ManageData/>
      <ListRender/>
    </div>
  );
}

export default App;
