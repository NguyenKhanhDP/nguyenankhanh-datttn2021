import React from 'react'
import { CartState } from '../context/Context'
import { SingleProduct } from './SingleProduct';
import './style.css'
import { Container, Row, Col, Toast } from 'react-bootstrap';
import { Filters } from './Filters';
imp

export const HomeCart = () => {
    const { state: { products },
        productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
    } = CartState();

    const transformProducts = () => {
        let sortedProducts = products;

        if (sort) {
            sortedProducts = sortedProducts.sort((a, b) =>
                sort === 'lowToHight' ? a.price - b.price : b.price - a.price
            );
        }


        if (!byStock) {
            sortedProducts = sortedProducts.filter((prod) => prod.inStock);
        }


        if (byFastDelivery) {
            sortedProducts = sortedProducts.filter((prod) => prod.byFastDelivery);
        }


        if (byRating) {
            sortedProducts = sortedProducts.filter((prod) => prod.ratings >= byRating);
        }

        if (searchQuery) {
            sortedProducts = sortedProducts.filter((prod) => prod.name.toLowerCase().includes(searchQuery));
        }

        return sortedProducts;
    };

    return (
        <div className="homecart">
            <Container fluid>
                <Row >
                    <Col sm={3}><Filters /></Col>
                    <Col sm={7}>
                        <div className="productContainer">
                            {transformProducts().map((prod) => {
                                return (
                                    <SingleProduct prod={prod} key={prod.id} />
                                )
                            })}
                        </div>
                    </Col>

                    <Col sm={2}>
                        <Col xs={6}>
                            <Toast onClose={() => setShow(false)} show={show} delay={300000} autohide>
                                <Toast.Header>
                                    <img
                                        src="holder.js/20x20?text=%20"
                                        className="rounded me-2"
                                        alt=""
                                    />
                                    <strong className="me-auto">Bootstrap</strong>
                                    <small>11 mins ago</small>
                                </Toast.Header>
                                <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                            </Toast>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>


    )
}
export default HomeCart