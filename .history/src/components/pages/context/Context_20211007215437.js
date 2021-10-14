import React, { createContext } from 'react'
import faker from 'faker'
import { cartReducer, productReducer } from './Producers'
import { useReducer, useContext } from 'react';

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {
    const products = [
        {

        }
    ]

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart:[]
    })

    const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
    });

    return (
        <Cart.Provider value={{ state,dispatch, productState, productDispatch}}>
            {children}
        </Cart.Provider>
    )
};

export default Context;

export const CartState = () => {
    return useContext(Cart);
};
