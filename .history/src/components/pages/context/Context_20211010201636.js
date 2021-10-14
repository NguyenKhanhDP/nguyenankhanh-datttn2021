import React, { createContext } from 'react'
import faker from 'faker'
import { cartReducer, productReducer } from './Producers'
import { useReducer, useContext } from 'react';

const Cart = createContext();
faker.seed(99);


const Context = ({ children }) => {
    const products = [
        {
            id: faker.datatype.uuid(),
            name: 'Khanhs',
            price: '100',
            image:"/images/moto-h2r.jpg",
            inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
            fastDelivery: faker.datatype.boolean(),
            ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
            text: 'sjhdskjdsdjsjdkk'
        },
        {
            id: faker.datatype.uuid(),
            name: 'chos vàng',
            price: '10',
            image: "/images/moto-h2r.jpg",
            inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
            fastDelivery: faker.datatype.boolean(),
            ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
            text: 'khanhs'
        },
        {
            id: faker.datatype.uuid(),
            name: 'chos vàng',
            price: '1',
            image: "/images/moto-h2r.jpg",
            inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
            fastDelivery: faker.datatype.boolean(),
            ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
            text: 'khanhs'
        },
        {
            id: faker.datatype.uuid(),
            name: 'chos vàng',
            price: '100000',
            image: "/images/moto-h2r.jpg",
            inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
            fastDelivery: faker.datatype.boolean(),
            ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
            text: 'khanhs'
        },
        {
            id: faker.datatype.uuid(),
            name: 'chos vàng',
            price: '1000000',
            image: "/images/moto-h2r.jpg",
            inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
            fastDelivery: faker.datatype.boolean(),
            ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
            text: 'khanhs'
        },
        {
            id: faker.datatype.uuid(),
            name: 'chos vàng',
            price: '1000',
            image: "/images/moto-h2r.jpg",
            inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
            fastDelivery: faker.datatype.boolean(),
            ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
            text: 'khanhs'
        },
        {
            id: faker.datatype.uuid(),
            name: 'chos vàng',
            price: '10000',
            image: "/images/moto-h2r.jpg",
            inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
            fastDelivery: faker.datatype.boolean(),
            ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
            text: 'khanhs'
        },
        {
            id: faker.datatype.uuid(),
            name: 'chos vàng',
            price: '10000',
            image: "/images/moto-h2r.jpg",
            inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
            fastDelivery: faker.datatype.boolean(),
            ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
            text: 'khanhs'
        },
        {
            id: faker.datatype.uuid(),
            name: 'chos vàng',
            price: '10000',
            image: "/images/moto-h2r.jpg",
            inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
            fastDelivery: faker.datatype.boolean(),
            ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
            text: 'khanhs'
        },
    ]

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    })

    const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
    });

    return (
        <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
            {children}
        </Cart.Provider>
    )
};

export default Context;

export const CartState = () => {
    return useContext(Cart);
};
