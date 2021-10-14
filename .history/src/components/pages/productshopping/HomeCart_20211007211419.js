import React from 'react'
import { CartState } from '../context/Context'
import { SingleProduct } from './SingleProduct';
import './style.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Filters } from './Filters';

export const HomeCart = () => {
    const { state: { products },
    productState: { sort, byStock, byFast }
 } = CartState();

    const transformProducts () => {
        let sortedProducts = products;

    }

    return (
        <div className="homecart">
            <Container>
                <Row>
                    <Col sm={3}><Filters /></Col>
                    <Col sm={9  }>
                        <div className="productContainer">
                            {products.map((prod) => {
                                return (
                                    <SingleProduct prod={prod} key={prod.id} />
                                )
                            })}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}
export default HomeCart