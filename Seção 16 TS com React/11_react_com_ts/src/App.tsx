import React, { createContext } from 'react';

import './App.css';

import FirstComponent from './components/FirstComponent';

// 5 - desestruturando props

import SecondComponent from './components/SecondComponent';
import Destruturing,{Category} from './components/Destruturing';

// 6 - useState

import State from './components/State';

// 10 - Utilizando Context

import Context from './components/Context'

// 8 - type
type textOuNull = string | null
type fixed = "isso" | "Ou" | "Aquilo";

// 9 - context
interface IAppContext{
  language: string,
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {
  // 1 variáveis

  const name: string="Rodolfo";
  const age: number = 30;
  const isWorking: boolean = true;

  // 2 - funções

  const userGreeting = (name:string): string =>{

    return `Olá, ${name}!`
  }
  //8 - type

  const myText:textOuNull = "Tem algum texto aqui"
  let mySecondText:textOuNull=null;

  //mySecondText = "opa";
  const testandoFixed:fixed = "isso"

  // 9 - Context

  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  }

  return (
    <AppContext.Provider value={contextValue}>
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
    
    {myText && <p>Tem texto na variável</p> }
    {mySecondText && <p>Tem texto na variável</p> }
    {testandoFixed && <p>dá para escrever qualquer coisa?</p> }
    
    <Context/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
