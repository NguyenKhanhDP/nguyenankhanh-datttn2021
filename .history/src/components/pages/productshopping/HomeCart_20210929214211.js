import React from 'react'
import { CartState } from '../context/Context'
import { SingleProduct } from './SingleProduct';
import './style.css'
import { Filter } from './Filter';

export const HomeCart = () => {
    const { state: { products }} = CartState();

    console.log(products);

    return (
        <div className="homecart">
           <Filter />

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