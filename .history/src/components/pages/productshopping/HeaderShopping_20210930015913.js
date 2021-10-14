import React, { Component } from 'react'
import { Badge, Container, Dropdown, FormControl, Navbar, Nav } from 'react-bootstrap'
import { GiShoppingCart } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { CartState } from '../context/Context';


export const HeaderShopping = () => {
    return (
        <>
            
        </>
    )
}


export class HeaderShopping extends Component {

    
render() {

    const {
        state:{ cart },
    } = CartState();

    return (
        <div>
           
        </div>
    )
}
}

export default HeaderShopping
