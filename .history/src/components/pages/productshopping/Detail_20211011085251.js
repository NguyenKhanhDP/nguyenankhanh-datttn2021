import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Detail.css'

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
                            <p>
                                Kawasaki Ninja H2R được biết đến là mẫu siêu mô tô đang nắm giữ kỷ lục nhanh nhất thế giới từ năm 2016 cho tới nay mà vẫn chưa có một siêu mô tô nào có thể phá vỡ. "Ma vương tốc độ" H2R chỉ mất 26 giây để đạt vận tốc từ 0-400 km/h trên một cây cầu ở Thổ Nhĩ Kỳ. Ngay cả những chiếc siêu xe ô tô nổi tiếng thế giới mang trong mình khối động cơ cực khủng như Lamborghini Aventador hay Ferrari 458 Italia cũng chưa thể đạt đến con số này nếu không được độ lại, điều này khiến nhiều người phải choáng váng.
                            </p>
                            <p>
                                Tuy nhiên, mẫu siêu mô tô chỉ được phép sử dụng trên đường đua bởi nhiều chi tiết của xe làm bằng sợi carbon nhằm giảm trọng lượng. Dàn áo bên ngoài cũng được làm từ vật liệu carbon, theo Kawasaki, phải mất đến 8 tháng để hoàn thành sản xuất riêng phần dàn áo cho xe. Siêu mô tô này cũng đã bị loại bỏ các trang bị cần thiết của một mẫu xe thương mại lưu thông trên đường phố như đèn, còi, xi-nhan...
                            </p>
                            <p>
                                Trái tim của Kawasaki H2R chính hãng 2021 là khối động cơ siêu nạp, 4 xylanh, dung tích 998cc, kết hợp hệ thống siêu nạp Supercharged giúp xe sản sinh công suất tối đa lên tới 310 mã lực (tăng lên 326 mã lực khi kích hoạt Ram-air) tại 14.000 vòng/phút. Sức kéo cực khủng với mô men xoắn cực đại đạt 155 Nm tại 12.500 vòng/phút.
                            </p>
                            <p>
                                Trong đợt đặt hàng cuối này, Kawasaki H2R chính hãng 2021 có giá bán lên tới 55.000 USD (tương đương với 1,275 tỷ đồng) tại thị trường Mỹ. Những vị khách đã đặt hàng sẽ được nhận xe trong những tháng đầu năm 2021.
                            </p>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col xs={12} md={8}>
                            35 lỗi vi phạm thường gặp của người đi xe máy và mức xử phạt
                        </Col>
                        <Col xs={6} md={4}>
                            xs=6 md=4
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
