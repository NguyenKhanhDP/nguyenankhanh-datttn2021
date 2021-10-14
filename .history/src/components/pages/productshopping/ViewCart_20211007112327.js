import React from 'react'
import { ListGroup } from 'react-bootstrap';
import { CartState } from '../context/Context'

export const ViewCart = () => {

    const {
        state: { cart },
        dispatch,
    } = CartState();

    return (
        <div className="homecart">
            <div className="productContainer">
                <ListGroup>
                    {
                        cart.map((prod) => (
                            <span>{prod.name}</span>
                        ))}
                </ListGroup>
            </div>

            <div className="filters summary">
                <span className="title">
                    Subtotal ({cart.length}) item
                </span>
                <span style={{ fontWeight: 700, fontSize: 20 }}>
                    
                </span>
            </div>
        </div>
    )
}
