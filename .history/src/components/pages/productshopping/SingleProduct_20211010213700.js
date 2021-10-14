import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react'
import { Alert, Card } from "react-bootstrap";
import { CartState } from '../context/Context';
import { Rating } from './Rating';
imp

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

                    <Alert show={show} variant="success">
                        <Alert.Heading>{prod.name}</Alert.Heading>
                        <p>
                            {prod.text}
                        </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                            <Button onClick={() => setShow(false)} variant="outline-success">
                                Đóng
                            </Button>
                        </div>
                    </Alert>

                    {!show && <Button onClick={() => setShow(true)}>Xem Chi Tiết</Button>}
                            <hr />
                    {/* <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                    >
                        Xem chi tiết
                    </Button>
                    <hr />
                    <Collapse in={open}>
                        <div id="example-collapse-text">
                            { prod.text}
                        </div>
                    </Collapse> */}
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
                                {!prod.inStock ? "Xe sắp về" : "Thêm vào giỏ hàng"}
                            </Button>
                        )
                    }
                </Card.Body>
            </Card>


        </div>
    )
}

