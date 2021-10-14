import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { HeaderShopping } from './productshopping/HeaderShopping'
import HomeCart from './productshopping/HomeCart'
import { ViewCart } from './productshopping/ViewCart'


export class Products extends Component {
  render() {
    return (
      <Router>
        <HeaderShopping />

        {/* <HomeCart /> */}
        <div className="App">
          <Route path='/products/homecart' exact>
            <HomeCart />
          </Route>
          <Route path='/products/viewcart' e>
            <ViewCart/>
          </Route>
        </div>
      </Router>
    )
  }
}

export default Products
