import React, { Component } from 'react'
import { Badge, Container, Dropdown, FormControl, Navbar, Nav, Button } from 'react-bootstrap'
import { GiShoppingCart } from 'react-icons/gi'
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { CartState } from '../context/Context';
import './styleheader.css'



export const HeaderShopping = () => {

    const {
        state: { cart },
        dispatch
    } = CartState();

    return (
        <>
        <div className="headershoppingcart">

        </div>
        </>
    )
}

