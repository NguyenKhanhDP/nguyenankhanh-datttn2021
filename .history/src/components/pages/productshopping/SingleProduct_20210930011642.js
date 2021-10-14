import Button from '@restart/ui/esm/Button';
import React from 'react'
import { Card } from "react-bootstrap";
import { Rating } from './Rating';

export const SingleProduct = ({ prod }) => {

    Ca

    return (
        <div className="products">
            <Card>
                <Card.Img variant='top' src={prod.image} alt={prod.name} />

                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Subtitle style={{ paddingBottom: 10 }}>
                        <span>₹ {prod.price.split(".")[0]}</span>
                        {prod.fastDelivery ? (
                            <div>Fast Delivery</div>
                        ) : (
                            <div>4 days delivery</div>
                        )}
                        <Rating rating={prod.ratings} />
                    </Card.Subtitle>

                    <Button variant='danger'>
                        Remove
                    </Button>
                    <Button disabled={ !prod.inStock }>
                        { !prod.inStock ? "Out of Stock": "ADD TO CART" }
                    </Button>
                    {/* {cart.some((p) => p.id === prod.id) ? (
                        <Button
                            variant="danger"
                            onClick={() =>
                                dispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload: prod,
                                })
                            }
                        >
                            Remove from Cart
                        </Button>
                    ) : (
                        <Button
                            onClick={() =>
                                dispatch({
                                    type: "ADD_TO_CART",
                                    payload: prod,
                                })
                            }
                            disabled={!prod.inStock}
                        >
                            {!prod.inStock ? "Out of Stock" : "Add to Cart"}
                        </Button>
                    )} */}
                </Card.Body>
            </Card>
        </div>
    )
}

