import React, { Component } from 'react'
import { Container, Navbar } from 'react-bootstrap'

export class HeaderShopping extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark">
                    <Container>
                            <Navbar.Brand>
                                <a href='/'>Các sản phẩm</a>
                            </Navbar.Brand>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default HeaderShopping
