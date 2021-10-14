import React, { Component } from 'react'
import { Container, FormControl, Navbar } from 'react-bootstrap'

export class HeaderShopping extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" style={{ height: 50 }}>
                    <Container>
                            <Navbar.Brand>
                                <a href='/'>Các sản phẩm</a>
                            </Navbar.Brand>

                            <Navbar.Text className="search">
                                <FormControl 
                                    style={{ width: 500 }}
                                    placeholder=" Nhap tim kim..."
                                    classNm
                            </Navbar.Text>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default HeaderShopping
