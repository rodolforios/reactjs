
import MyForm from './Components/MyForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>

      <MyForm user={{name:"Pedro", email: "pedro@pedrosa.com",bio:"bla bla"}} />
    </div>
  );
}

export default App;
