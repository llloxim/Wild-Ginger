import React, {createContext } from 'react';
import Menu from './Menu.json'


export const MenuContext = createContext();

export const MenuProvider = (props) =>{
    return(
        <MenuContext.Provider value={Menu}>
            {props.children}
        </MenuContext.Provider>
    );
}