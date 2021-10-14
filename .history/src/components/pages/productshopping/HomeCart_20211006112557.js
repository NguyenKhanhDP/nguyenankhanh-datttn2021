import React from 'react'
import { CartState } from '../context/Context'
import { SingleProduct } from './SingleProduct';
import './style.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Filters } from './Filters';
import Footer from '../../Footer';

export const HomeCart = () => {
    const { state: { products } } = CartState();

    console.log(products);

    return (
        <div className="homecart">
            <Container>
                <Row>
                    <Col sm={4}><Filters/></Col>
                    <Col sm={8}>
                    
                    </Col>
                </Row>
            </Container>
        </div>

    )
}
export default HomeCart