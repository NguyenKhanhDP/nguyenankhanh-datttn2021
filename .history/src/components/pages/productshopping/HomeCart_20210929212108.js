import React from 'react'
import { CartState } from '../context/Context'

export const HomeCart = () => {
    const { state: { produc }} = CartState();

    console.log(state);

    return (
        <>
            HomeCart
        </>
    )
}
export default HomeCart