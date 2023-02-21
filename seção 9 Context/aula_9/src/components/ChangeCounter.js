// 3 - alterando o contexto

import {useContext} from "react";
import {CounterContext} from "../context/CounterContext"

import React from 'react'

const ChangeCounter = () => {

    const {counter,SetCounter} =useContext(CounterContext)

  return (
    <div>
        <button onClick={()=>SetCounter(counter + 1)}> Add value to counter</button>
    </div>
  )
}

export default ChangeCounter