import React from 'react';
// import { useContext } from 'react';
// import { CounterContext } from '../context/CounterContext';
import {useCounterContext} from "../hooks/useCounterContext"

function About() {
  // const {counter} = useContext (CounterContext)
  const {counter} = useCounterContext()

  return (
    <div style={{textAlign:"center"}}>
      <h1>About Us</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
}

export default About;
