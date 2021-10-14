import React from 'react'
import { Card } from 'react-bootstrap'

export const SingleProduct = ({ prod }) => {
    return (
        <div className="products">
            <Card>
                <Card.Img variant='top' src={ prod.img } a/>
            </Card>            
        </div>
    )
}
