import React from 'react'
import { ListGroup } from 'react-bootstrap';
import { CartState } from '../context/Context'

export const ViewCart = () => {
    
    const {
        state: { viewcart },
        dispatch,
    }= CartState();

    return (
        <div className="homecart">
            <div className="productContainer">
                <ListGroup>
                    {
                        cart.map()
                    }
                </ListGroup>
            </div>
        </div>
    )
}
