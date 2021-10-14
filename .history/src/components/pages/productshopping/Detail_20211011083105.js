import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const Detail = () => {
    return (
        <>
            <div className="detail">
                <Container fluid>
                    <Row>
                        <Col xs={6} md={4}>
                            <img src="./images/detail1.jpg" alt="" style= />
                        </Col>
                        <Col xs={12} md={8}>
                        <h3>KAWASAKI H2R CHÍNH HÃNG 2021 CHUẨN BỊ VỀ TAY KHÁCH HÀNG – CHÍNH THỨC <span>“NGỪNG CUỘC CHƠI”</span></h3>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
