import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const Detail = () => {
    return (
        <>
            <div className="detail">
                <Container fluid>
                    <Row>
                        <Col xs={6} md={4}>
                            <img src="./images/detail1.jpg" alt="" style={{ width:"100%", height:"500px", marginTop:"10px" }} />
                            <h5>kahnsh</h5>
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
