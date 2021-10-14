import React from 'react'
import { CartState } from '../context/Context'
import { SingleProduct } from './SingleProduct';

export const HomeCart = () => {
    const { state: { products }} = CartState();

    console.log(products);

    return (
        <div className="homecart">
            {/* Filter */}

            <div className="productContainer">
                { products.map((prod) =>{
                    return (
                       <SingleProduct prod={}/>
                    )
                })}
            </div>
        </div>
    )
}
export default HomeCart