import React, { createContext } from 'react'
import faker from 'faker'


const Cart = createContext();



const Context = ({ children }) => {
    Context
    return (
        <Cart.Provider>
            { children }
        </Cart.Provider>
    
    )
        
};

export default Context
