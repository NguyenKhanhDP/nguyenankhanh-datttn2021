import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const Detail = () => {
    return (
        <>
            <div className="detail">
                <Container fluid>
                    <Row>
                        <Col xs={6} md={4}>
                        </Col>
                        <Col xs={12} md={8}>
                            xs=12 md=8
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
