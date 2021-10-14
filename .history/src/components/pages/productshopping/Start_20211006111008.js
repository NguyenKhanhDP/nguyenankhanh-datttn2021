import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export const Start = () => {
    return (
        <div className="start">
            <Link to='/products/homecart'>Các sản phẩm</Link>
        </div>
    )
}
