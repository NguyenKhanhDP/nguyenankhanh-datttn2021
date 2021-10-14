import React, { createContext } from 'react'
import faker from ''
const Cart = createContext();



const Context = ({ children }) => {
    return (
        <Cart.Provider>
            { children }
        </Cart.Provider>
    
    )
        
};

export default Context
