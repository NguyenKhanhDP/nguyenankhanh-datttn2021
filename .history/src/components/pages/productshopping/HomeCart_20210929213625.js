import React from 'react'
import { CartState } from '../context/Context'
import { SingleProduct } from './SingleProduct';
import './style.css'

export const HomeCart = () => {
    const { state: { products }} = CartState();

    console.log(products);

    return (
        <div className="homecart">
           <

            <div className="productContainer">
                { products.map((prod) =>{
                    return (
                       <SingleProduct prod={prod} key={prod.id}/>
                    )
                })}
            </div>
        </div>
    )
}
export default HomeCart