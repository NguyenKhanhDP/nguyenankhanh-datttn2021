import React, { Component } from 'react'
import { Badge, Container, Dropdown, FormControl, Navbar, Nav } from 'react-bootstrap'
import { GiShoppingCart } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { CartState } from '../context/Context';


export const HeaderShopping = () => {
    
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

                            <Dropdown.Menu style={{ minWidth: 370 }}>
                                <span style={{ padding: 10 }}>viewcart</span>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>

                </Container>
            </Navbar>
        </>
    )
}


export class HeaderShopping extends Component {


    render() {

        const {
            state: { cart },
        } = CartState();

        return (
            <div>

            </div>
        )
    }
}

export default HeaderShopping
