import React from 'react';

import './App.css';

import FirstComponent from './components/FirstComponent';

// 5 - desestruturando props

import SecondComponent from './components/SecondComponent';
import Destruturing,{Category} from './components/Destruturing';

// 6 - useState

import State from './components/State';

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
      <SecondComponent name="Segundo"/>
       <Destruturing title="Primeiro post" content="Algum conteúdo" commentsQty={10} tags={["ts","js"]} category={Category.TS}/> 
       <Destruturing title="Segundo post" content="Algum outro conteúdo" commentsQty={16} tags={["ts","js","React"]}category={Category.TS}/> 
       <State/>
    
    
    
    </div>
  );
}

export default App;
