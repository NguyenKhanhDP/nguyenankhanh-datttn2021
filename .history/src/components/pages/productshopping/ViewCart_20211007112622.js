import Button from '@restart/ui/esm/Button';
import React from 'react'
import { ListGroup } from 'react-bootstrap';
import { CartState } from '../context/Context'

export const ViewCart = () => {

    const {
        state: { cart },
        dispatch,
    } = CartState();

    const [state, setstate] = useState(initialState)

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
                    total: $ { total }
                </span>

                <Button type="button" disabled={ cart.length === 0 }>
                    Thanh toan
                </Button>
            </div>
        </div>
    )
}
