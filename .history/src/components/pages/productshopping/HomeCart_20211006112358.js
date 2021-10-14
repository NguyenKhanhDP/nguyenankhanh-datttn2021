import React from 'react'
import { CartState } from '../context/Context'
import { SingleProduct } from './SingleProduct';
import './style.css'
import { Container, Row,  } from 'react-bootstrap';
import { Filters } from './Filters';
import Footer from '../../Footer';

export const HomeCart = () => {
    const { state: { products } } = CartState();

    console.log(products);

    return (
        <div className="homecart">
            <Container>
                <Row>
                    <Col><Filters /></Col>
                </Row>
            </Container>
            

            <div className="productContainer">
                {products.map((prod) => {
                    return (
                        <SingleProduct prod={prod} key={prod.id} />
                    )
                })}
            </div>
        </div>

    )
}
export default HomeCart