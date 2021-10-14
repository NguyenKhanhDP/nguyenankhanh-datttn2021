import React, { Component } from 'react'
import { BrowserRouter,Route,  } from 'react-router-dom'
import { HeaderShopping } from '../../productshopping/HeaderShopping'
import { HomeCart } from '../../productshopping/HomeCart'
import Cartview from '../../productshopping/Cartview'

export class Products extends Component {
  render() {
    return (
      <BrowserRouter>
        <HeaderShopping />

        <div>
          <Route path="/" exact>
            <HomeCart />
          </Route>
          <Route path='/cartview' exact>
            <Cartview />
          </Route>
        </div>
      </BrowserRouter>
    )
  }
}

export default Products
