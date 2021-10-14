import React from 'react'
import { ListGroup } from 'react-bootstrap';
import { CartState } from '../context/Context'

export const ViewCart = () => {

    const {
        state: { viewcart },
        dispatch,
    } = CartState();

    return (
        <div className="homecart">
            <div className="productContainer">
                <ListGroup>
                    {
                        viewcart.map((prod) => (
                            <span>{prod.name}</span>
                        ))}
                </ListGroup>
            </div>
        </div>
    )
}
