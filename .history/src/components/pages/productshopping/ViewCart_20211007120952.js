import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap';
import { CartState } from '../context/Context'
import { Rating } from '../productshopping/Rating'

export const ViewCart = () => {

    const {
        state: { cart },
        dispatch,
    } = CartState();

    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0))
    }, [cart])

    return (
        <div className="homecart">
            <div className="productContainer">
                <ListGroup>
                    {
                        cart.map((prod) => (
                            <ListGroup.Item key={prod.id}>
                                <Row>
                                    <Col md={2}>
                                        <span>{prod.name}</span>
                                    </Col>
                                    <Col md={2}>
                                        <span>${prod.price}</span>
                                    </Col>
                                    <Col md={2}>
                                        <Rating rating= {prod.ratings} />
                                    </Col>
                                    <Col md={2}>
                                        F>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                </ListGroup>
            </div>

            <div className="filters summary">
                <span className="title">
                    Subtotal ({cart.length}) item
                </span>
                <span style={{ fontWeight: 700, fontSize: 20 }}>
                    total: $ {total}
                </span>

                <Button type="button" disabled={cart.length === 0}>
                    Thanh toan
                </Button>
            </div>
        </div>
    )
}
