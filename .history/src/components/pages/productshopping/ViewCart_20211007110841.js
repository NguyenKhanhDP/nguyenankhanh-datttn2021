import React from 'react'
import { CartState } from '../context/Context'

export const ViewCart = () => {
    
    const {
        state: { viewcart },
        dispatch,
    }= CartState();

    return (
        <div class>
            hiihihii
        </div>
    )
}
