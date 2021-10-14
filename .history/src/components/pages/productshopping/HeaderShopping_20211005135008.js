import React, { Component } from 'react'
import { Badge, Container, Dropdown, FormControl, Navbar, Nav, B } from 'react-bootstrap'
import { GiShoppingCart } from 'react-icons/gi'
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { CartState } from '../context/Context';
import './style.css'


export const HeaderShopping = () => {

    const {
        state: { cart },
        dispatch
    } = CartState();

    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ height: 60 }}>
                <Container>
                    <Navbar.Brand>
                        <Link to='/'>Các sản phẩm</Link>
                    </Navbar.Brand>

                    <Navbar.Text className="search">
                        <FormControl
                            style={{ width: 500 }}
                            placeholder=" Nhap tim kim..."
                            className="m-auto" />
                    </Navbar.Text>

                    <Nav>
                        <Dropdown>
                            <Dropdown.Toggle variant="success">
                                <GiShoppingCart color="white" fontSize="30px" />
                                <Badge>{cart.length}</Badge>
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{ minWidth: 220 }}>

                                {cart.length > 0 ? (
                                    <>
                                        {cart.map((prod) => (
                                            <span className="cartitem" key={prod.id}>
                                                <img
                                                    src={prod.image}
                                                    className="cartItemImg"
                                                    alt={prod.name} />
                                                <div className="cartItemDetail">
                                                    <span>{prod.name}</span>
                                                    <span>
                                                        ${prod.price.split(".")[0]}
                                                    </span>
                                                </div>

                                                <AiFillDelete
                                                    fontSize="20px"
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() =>
                                                        dispatch({
                                                            type: "REMOVE_FROM_CART",
                                                            payload: prod,
                                                        })
                                                    }
                                                />
                                            </span>

                                        ))
                                        }<span><hr /></span>
                                        <Link to="/cart">
                                            <Button style={{ width: "95%", margin: "0 10px" }}>
                                                Go To Cart
                                            </Button>
                                        </Link>
                                    </>
                                ) : (<span style={{ padding: 10 }}>viewcart</span>)}

                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>

                </Container>
            </Navbar>
        </>
    )
}

