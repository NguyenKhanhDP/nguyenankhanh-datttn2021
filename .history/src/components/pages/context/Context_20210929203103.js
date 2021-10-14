import React, { createContext } from 'react'

const Cart = createContext();



const Conte = ({ children }) => {
    return (
        <Cart.Provider>
            { children }
        </Cart.Provider>
    
    )
        
};

export default Producers
