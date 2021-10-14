import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { HeaderShopping } from './productshopping/HeaderShopping'
import HomeCart from './productshopping/HomeCart'
import Cartview from './productshopping/Cartview'


export class Products extends Component {
  render() {
    return (
      <Router>
        <HeaderShopping />

        <Route path='/homecart' exact>
          <Home
        </Route>
      </Router>
    )
  }
}

export default Products
