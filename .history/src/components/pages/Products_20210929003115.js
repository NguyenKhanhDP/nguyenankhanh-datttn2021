import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HeaderShopping } from '../../productshopping/HeaderShopping'
import './Home'
export class Products extends Component {
  render() {
    return (
      <BrowserRouter>
        <HeaderShopping />

        <div>
          <Route pat='/home'>
            <Home />
          </Route>
          <Route pat='/cartview'>
            <Cartview />
          </Route>
        </div>
      </BrowserRouter>
    )
  }
}

export default Products
