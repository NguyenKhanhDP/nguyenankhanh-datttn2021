import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HeaderShopping } from '../../productshopping/HeaderShopping'

export class Products extends Component {
  render() {
    return (
      <BrowserRouter>
        <HeaderShopping />
      </BrowserRouter>
    )
  }
}

export default Products
