import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Image, ListGroup, Row } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
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
            <Container>
                <Row>
                    <Col>

                    </Col>
                </Row>
            </Container>
                
            </div>

            <div className="filters summary">
                <span className="title">
                    Bạn đang có ({cart.length}) sản phẩm trong giỏ hàng
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
