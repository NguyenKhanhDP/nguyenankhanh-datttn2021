import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './'

export const Detail = () => {
    return (
        <>
            <div className="detail">
                <Container fluid>
                    <Row>
                        <Col xs={6} md={4}>
                            <img src="./images/detail1.jpg" alt="" style={{ width: "100%", height: "500px", marginTop: "10px" }} />
                            <p style={{ fontWeight: "normal", fontFamily: "sans-serif" }}>Kawasaki H2R đã nắm giữ ngôi vương trong các cuộc đua tốc độ nhiều năm liền</p>
                        </Col>
                        <Col xs={12} md={8}>
                            <h3>KAWASAKI H2R CHÍNH HÃNG 2021 CHUẨN BỊ VỀ TAY KHÁCH HÀNG – CHÍNH THỨC <span>“NGỪNG CUỘC CHƠI”</span></h3>
                            <p>Kawasaki H2R sau một thời gian dài chinh phục ngôi vương trên đường đua mới đây đã chính thức được Kawasaki xác nhận sẽ sớm ngừng sản xuất. Những chiếc Kawasaki H2R chính hãng 2021 cuối cùng dự kiến sẽ được giao cho khách hàng đã đặt hàng trong năm nay.

                                Hãng xe Nhật Bản cho biết hiện đã ngừng sản xuất mẫu xe Kawasaki Ninja H2R kể từ tháng 10/2020, hãng đã nhận đợt đặt hàng cuối cùng từ 20/9 cho tới 21/10/2020. Đây có lẽ là một thông tin khá bất ngờ và gây nhiều tiếc nuối, nhất là đối với các tín đồ đam mê tốc độ trên toàn thế giới.

                                Kawasaki H2R không còn là một cái tên quá xa lạ đối với rất nhiều người, đặc biệt là các tín đồ của tốc độ. Ngay từ trước khi ra mắt, H2R đã được Kawasaki thực hiện những chiến dịch quảng bá rất mạnh mẽ với danh hiệu là mẫu Superbike nhanh nhất thế giới.

                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
