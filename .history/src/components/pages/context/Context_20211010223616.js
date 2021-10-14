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
            name: 'KAWASAKI H2R',
            price: '1275000000',
            image:"/images/moto-h2r1.jpg",
            inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
            fastDelivery: faker.datatype.boolean(),
            ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
            text: 'sjhdskjdsdjsjdkk'
        },
        {
            id: faker.datatype.uuid(),
            name: 'BMW S1000RR',
            price: '10',
            image: "/images/moto-bmws1000rr2.jpg",
            inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
            fastDelivery: faker.datatype.boolean(),
            ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
            text: 'khanhs'
        },
        {
            id: faker.datatype.uuid(),
            name: 'DUCATI PANIGALE V2 2020',
            price: '1',
            image: "/images/moto-dctPanigalev220205.jpg",
            inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
            fastDelivery: faker.datatype.boolean(),
            ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
            text: 'khanhs'
        },
        {
            id: faker.datatype.uuid(),
            name: 'KAWASAKI Z100ABS 2017',
            price: '1000000',
            image: "/images/moto-kwskz100abs2017.jpg",
            inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
            fastDelivery: faker.datatype.boolean(),
            ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
            text: 'khanhs'
        },
        {
            id: faker.datatype.uuid(),
            name: 'YAMAHA MT-03 ABS',
            price: '1000',
            image: "/images/moto-ymhmt-03abs3.jpg",
            inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
            fastDelivery: faker.datatype.boolean(),
            ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
            text: 'khanhs'
        },
        {
            id: faker.datatype.uuid(),
            name: 'YAMAHA YZX R15',
            price: '10000',
            image: "/images/moto-yzxr154.jpg",
            inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
            fastDelivery: faker.datatype.boolean(),
            ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
            text: 'khanhs'
        },
        {
            id: faker.datatype.uuid(),
            name: 'KAWASAKI Z1000ABS',
            price: '10000',
            image: "/images/moto-kwskz1000abs.jpg",
            inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
            fastDelivery: faker.datatype.boolean(),
            ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
            text: 'khanhs'
        },
        {
            id: faker.datatype.uuid(),
            name: 'HONDA CB350RS',
            price: '10000',
            image: "/images/moto-hondacb350rs.jpg",
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
