import { createContext, useState } from "react"
//1- Criar context


export const CounterContext = createContext()

// 2 - criar Provider

export const CounterContextProvider = ({ children }) => {

    const [counter, SetCounter] = useState(5);

    return (
        <CounterContext.Provider value={{ counter, SetCounter }}>

            {children}
        </CounterContext.Provider>
    )
}