import React, { Component } from 'react'
import { BrowserRouter,Route,  } from 'react-router-dom'
import Cartview from '../../productshopping/Cartview'
import { HeaderShopping } from '../../productshopping/HeaderShopping'
import HomeCart from '../../productshopping/HomeCart'


export class Products extends Component {
  render() {
    return (
      <BrowserRouter>
        <HeaderShopping />

        <div>
          <HomeCart />
        </div>
      </BrowserRouter>
    )
  }
}

export default Products
