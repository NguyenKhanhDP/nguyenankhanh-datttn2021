import React, { Component } from 'react'
import { BrowserRouter,Route,  } from 'react-router-dom'
import { HeaderShopping } from '../../productshopping/HeaderShopping'
import HomeCar from '../../productshopping/HomeCart'
import { CartV }

export class Products extends Component {
  render() {
    return (
      <BrowserRouter>
        <HeaderShopping />

        <div>
          <Route pat='/homecart' exact>
            <HomeCar />
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
