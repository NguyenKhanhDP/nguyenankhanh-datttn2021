import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { HeaderShopping } from './productshopping/HeaderShopping'
import HomeCart from './productshopping/HomeCart'
import Car


export class Products extends Component {
  render() {
    return (
      <Router>
        <HeaderShopping />

        <HomeCart />
        <div>
          <Route path='/products/cartview' exact>
            <Cartview />
          </Route>

        </div>

      </Router>
    )
  }
}

export default Products
