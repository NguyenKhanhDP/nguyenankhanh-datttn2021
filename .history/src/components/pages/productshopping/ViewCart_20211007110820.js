import React from 'react'
import { CartState } from '../context/Context'

export const ViewCart = () => {
    
    const {
        state: { viewcart },
        dispatch,
    }= CartState();

    return (
        <div>
            hiihihii
        </div>
    )
}
