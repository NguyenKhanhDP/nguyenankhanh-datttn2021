import React, { Component } from 'react'
import { Container, Dropdown, FormControl, Navbar } from 'react-bootstrap'

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
                                    <
                                </Dropdown>
                            </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default HeaderShopping
