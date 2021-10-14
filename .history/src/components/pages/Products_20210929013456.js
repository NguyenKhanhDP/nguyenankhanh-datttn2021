import React, { Component } from 'react'
import { BrowserRouterb } from 'react-router-dom'
import { HeaderShopping } from './productshopping/HeaderShopping'
import HomeCart from './productshopping/HomeCart'
import Cartview from './productshopping/Cartview'


export class Products extends Component {
  render() {
    return (
      <Router>
        <HeaderShopping />

        <div>
          <Route path='/homecart' exact>
            <HomeCart />
          </Route>

          <Route path='/cartview'>
            <Cartview />
          </Route>
        </div>
      </Router>
    )
  }
}

export default Products
