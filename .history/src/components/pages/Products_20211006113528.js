import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { HeaderShopping } from './productshopping/HeaderShopping'
import HomeCart from './productshopping/HomeCart'
import { ViewCart } from './productshopping/ViewCart'


export class Products extends Component {
  render() {
    return (
      <Router>
      <div clas></div>
        <HeaderShopping />

        {/* <HomeCart /> */}
        <div className="App">
          <Route exact path='/products/homecart' >
            <HomeCart />
          </Route>
          <Route path='/products/viewcart' exact>
            <ViewCart/>
          </Route>
        </div>
      </Router>
    )
  }
}

export default Products
