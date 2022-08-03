import React from 'react';

import './App.css';
import FirstComponent from './components/FirstComponent';

function App() {
  // 1 variáveis

  const name: string="Rodolfo";
  const age: number = 30;
  const isWorking: boolean = true;

  // 2 - funções

  const userGreeting = (name:string): string =>{

    return `Olá, ${name}!`
  }


  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      <p>Está trabalhando? {isWorking}</p>
      {isWorking && (
        <div>
          <p>Está trabalhando!</p>
        </div>
      )}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent/>
    </div>
  );
}

export default App;
