import React from 'react';
// import { useContext } from 'react';
// import {CounterContext} from '../context/CounterContext';
import ChangeCounter from './ChangeCounter';

//4 - Refatorando com Hook
import { useCounterContext } from "../hooks/useCounterContext"

// 5 - context mais complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext';

const Home = () => {
  // const {counter} = useContext(CounterContext)
  const { counter } = useCounterContext()
  // 5 - context mais complexo
  const { color,dispatch } = useTitleColorContext()

  // 6 - Alterando o state complexo

  const setTitleColor = (color) => {
    dispatch({ type: color })
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: color }}>Home</h1> <br></br>
      <p>Valor do contador: {counter}</p>
      {/* Alterando o valor contexto */}
      <ChangeCounter />
      {/* 6 - Alterando o state complexo */}
      <div>
        <button onClick={() => { setTitleColor("RED") }}>Vermelho</button>
        <button onClick={() => { setTitleColor("BLUE") }}>Azul</button>
        <button onClick={() => { setTitleColor(color) }}>Roxo</button>
      </div>
    </div>
  )
}

export default Home