import React, {useState, createContext } from 'react';

export const CounterContext = createContext();

export const CounterProvider = (props) =>{
    const [counter, setCounter] = useState([]);
    return(
        <CounterContext.Provider value={[counter, setCounter]}>
            {props.children}
        </CounterContext.Provider>
    );
}