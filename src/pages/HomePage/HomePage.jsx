import React from 'react';
import useDocument from '~/hooks/redux/document/useDocument';

// Import data
import data from '~/constant/menu';

// Import react-bootstrap
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Css module
import classNames from 'classnames/bind';
import styles from './_HomePage.module.scss';
const cx = classNames.bind(styles);

export default function HomePage() {
  const { document } = useDocument();

  return (
    <Container fluid className={cx('wrapper')}>
      <title>{document.title}</title>

      <Container>
        <Row className={cx('row-home')}>
          <Col xxl={4} xl={3} lg={3} md={4} sm={12} xs={12} className={cx('row-home__left')}>
            <MenuItem />
          </Col>
          <Col xxl={8} xl={9} lg={9} md={8} sm={12} xs={12} className={cx('row-home__right')}>
            <div className={cx('title')}>CỔNG THÔNG TIN </div>
            <div className={cx('sub-title')}>Tuyển sinh đầu cấp vào các lớp Mầm non 5 tuổi, 1 tuổi, lớp 6 và lớp 10 THPT công lập </div>
            <div className={cx('sub-title')}>Năm học 2023-2024</div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export const MenuItem = () => {
  return (
    <div>
      {data !== undefined &&
        data.map((menu, index) => {
          return (
            <Link to={menu.link}>
              <Row key={index} className={cx('row-menuitem')}>
                <Col xxl={3} xl={4} lg={4} md={3} sm={3} xs={3} className={cx('row-menuitem__left')}>
                  <img src={menu.img} alt="" />
                </Col>
                <Col xxl={9} xl={8} lg={8} md={9} sm={9} xs={9} className={cx('row-menuitem__right')}>
                  {menu.title}
                </Col>
              </Row>
            </Link>
          );
        })}
    </div>
  );
};
