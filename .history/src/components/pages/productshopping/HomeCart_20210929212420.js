import React from 'react'
import { CartState } from '../context/Context'

export const HomeCart = () => {
    const { state: { products }} = CartState();

    console.log(products);

    return (
        <div className="homecart">
            {/* Filter */}

            <div className="productContainer">
                { pro }
            </div>
        </div>
    )
}
export default HomeCart