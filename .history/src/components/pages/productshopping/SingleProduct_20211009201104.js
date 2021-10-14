import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react'
import { Card, Toast } from "react-bootstrap";
import { CartState } from '../context/Context';
import { Rating } from './Rating';

export const SingleProduct = ({ prod }) => {

    const [show, setShow] = useState(false);

    const {
        state: { cart },
        dispatch,
    } = CartState();

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
                    <Button onClick={() => setShow(true)}>Show Toast</Button>
                    {
                        cart.some(p => p.id === prod.id) ? (
                            
                            <Button
                                onClick={() => {
                                    dispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload: prod,
                                    });
                                }}
                                variant='danger'>
                                Remove
                            </Button>
                        ) : (
                            <Button
                                onClick={() => {
                                    dispatch({
                                        type: "ADD_TO_CART",
                                        payload: prod,
                                    });
                                }}
                                disabled={!prod.inStock}>
                                {!prod.inStock ? "Ngừng kinh doanh" : "ADD TO CART"}
                            </Button>
                        )
                    }
                </Card.Body>
            </Card>

            <Col xs={6}>

                <Toast onClose={() => setShow(false)} show={show} delay={300000} autohide>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                </Toast>
            </Col>
        </div>
    )
}

