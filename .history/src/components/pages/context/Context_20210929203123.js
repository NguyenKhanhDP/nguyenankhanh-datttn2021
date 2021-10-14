import React, { createContext } from 'react'
import 
const Cart = createContext();



const Context = ({ children }) => {
    return (
        <Cart.Provider>
            { children }
        </Cart.Provider>
    
    )
        
};

export default Context
