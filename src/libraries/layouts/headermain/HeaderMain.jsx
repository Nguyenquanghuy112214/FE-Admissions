import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import logo from '~/assets/img/logoHN.png';
import phone from '~/assets/img/header-phone.png';
// Css module
import classNames from 'classnames/bind';
import styles from './_headermain.module.scss';
const cx = classNames.bind(styles);

export default function HeaderMain() {
  const navigate = useNavigate();
  const gotoHomePage = () => {
    navigate('/');
  };
  return (
    <div className={cx('wrapper')}>
      <Container fluid>
        <Row>
          <Col onClick={gotoHomePage} xxl={6} xl={6} lg={6} md={6} sm={6} xs={10} className={cx('header-left')}>
            <div className={cx('logo')}>
              <img className={cx('img-logo')} src={logo} alt="" />
            </div>
            <div className={cx('title-header')}>
              <div className={cx('main-title')}>Sở Giáo Dục Và Đào Tạo Hà Nội</div>
              <div className={cx('sub-title')}>CỔNG THÔNG TIN TUYỂN SINH</div>
            </div>
          </Col>
          <Col xxl={6} xl={6} lg={6} md={6} sm={0} className={cx('header-right')}>
            <div className={cx('support-hotline')}>
              <div className={cx('hotline')}>
                <img className={cx('img-hotline')} src={phone} alt="" />
              </div>
              <div className={cx('time-work')}>Các số máy hỗ trợ (Từ 8h00 đến 17h00 hàng ngày)</div>
            </div>
          </Col>
          <Col xxl={0} xl={0} lg={0} md={0} sm={6} xs={2} className={cx('header-menu')}>
            <div className={cx('hotline-menu')}>
              <img className={cx('img-menu')} src={phone} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
