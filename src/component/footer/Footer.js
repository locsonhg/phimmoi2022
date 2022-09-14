import { Col, Row } from 'antd';
import React from 'react';

const Footer = () => {
    return (
        <div className='footer' style={{
            background: '#000',
            color: '#fff',
            padding: '30px 25px'
        }}>
            <Row>
                <Col xs={24} sm={24} md={24} lg={18} xl={18} xxl={18}>
                <p>
                Xem phim miễn phí chất lượng cao với phụ đề tiếng việt - thuyết minh - lồng tiếng. Phim Hay có nhiều thể loại phim phong phú, đặc sắc, nhiều bộ phim hay nhất - mới nhất.
                </p>
                <p>
                    Lưu ý đây chỉ là sản phẩm cá nhân và chưa được kiểm định, hay đóng góp ý kiến về <strong>
                        locsonhgson@gmail.com
                    </strong>
                </p>
                </Col>
                <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={6}>
                <strong style={{float: 'right'}}>
                    Design by <a href='https://www.facebook.com/son.loc.5220'>Locsong</a>
                </strong>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;