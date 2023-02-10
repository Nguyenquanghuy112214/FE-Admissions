import { Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
// Import components
import Menu from '~/constant/menu';
import MenuMb from '~/libraries/components/MenuMb/MenuMb';

// Import img
import logo from '~/assets/img/logoHN.png';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';

// Css module
import classNames from 'classnames/bind';
import styles from './_headersub.module.scss';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

export default function HeaderSub() {
  const navigate = useNavigate();
  const [activeMenuMb, setActiveMenuMb] = useState(false);
  const gotoHomePage = () => {
    navigate('/');
  };
  // open menu mobile
  const openMenuMb = () => {
    setActiveMenuMb(true);
  };

  // close menu mobile
  const closeMenuMb = () => {
    setActiveMenuMb(false);
  };

  useEffect(() => {
    setActiveMenuMb(false);
  }, [window.location.pathname]);
  return (
    <div className={cx('wrapper')}>
      {/* MenuMb */}
      <div onClick={closeMenuMb} className={`overlay-modal ${activeMenuMb ? 'active_overlay' : ''}`}></div>
      <MenuMb onClick={closeMenuMb} active={activeMenuMb} />
      {/* MenuMb */}
      <Container fluid>
        <Row>
          <Col onClick={gotoHomePage} xxl={6} xl={6} lg={5} md={5} sm={6} xs={10} className={cx('header-left')}>
            <div className={cx('logo')}>
              <img className={cx('img-logo')} src={logo} alt="" />
            </div>
            <div className={cx('title-header')}>
              <div className={cx('main-title')}>Sở Giáo Dục Và Đào Tạo Hà Nội</div>
              <div className={cx('sub-title')}>CỔNG THÔNG TIN TUYỂN SINH</div>
            </div>
          </Col>
          <Col xxl={6} xl={6} lg={7} md={7} sm={3}   xs={2}className={cx('header-right')}>
            <div className={cx('wrapper-input')}>
              {Menu !== undefined &&
                Menu.map((item, index) => {
                  if (item.id !== 6) {
                    return (
                      <Link key={index} className={cx('item')} to={item.link}>
                        {item.title}
                      </Link>
                    );
                  }
                })}
            </div>
          </Col>
          <Col xxl={0} xl={0} lg={0} md={0} sm={6} xs={2} className={cx('header-menu')}>
            <div onClick={openMenuMb} className={cx('menu-mb')}>
              <HiOutlineMenuAlt1 />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
