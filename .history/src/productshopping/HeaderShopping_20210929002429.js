import React, { Component } from 'react'
import { Badge, Container, Dropdown, FormControl, Navbar, Nav } from 'react-bootstrap'
import {GiShoppingCart} from 'ract-icons/gi'

export class HeaderShopping extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" style={{ height: 60 }}>
                    <Container>
                            <Navbar.Brand>
                                <a href='/'>Các sản phẩm</a>
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
                                        <Badge>{2}</Badge>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu style=>

                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav>

                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default HeaderShopping
