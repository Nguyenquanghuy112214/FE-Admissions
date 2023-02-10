import React from 'react';
import useDocument from '~/hooks/redux/document/useDocument';
// Import react-bootstrap
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Css module
import classNames from 'classnames/bind';
import styles from './_DKTSPage.module.scss';
const cx = classNames.bind(styles);
function DKTSPage() {
  const { document } = useDocument();
  const data = [
    { id: 1, class: 'Mầm non', title: 'Tuyển sinh trẻ 5 tuổi vào trường mầm non công lập năm học 2022-2023' },
    { id: 2, class: 'Lớp 1', title: 'Tuyển sinh trẻ 5 tuổi vào trường mầm non công lập năm học 2022-2023' },
    { id: 3, class: 'Lớp 6', title: 'Tuyển sinh trẻ 5 tuổi vào trường mầm non công lập năm học 2022-2023' },
    { id: 4, class: 'Lớp 10', title: 'Tuyển sinh trẻ 5 tuổi vào trường mầm non công lập năm học 2022-2023' },
  ];
  return (
    <Container fluid className={cx('wrapper')}>
      <title>{document.title}</title>

      <Container>
        <Row className={cx('row-dkts', 'justify-content-center;')}>
          <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} className={cx('col-dkts')}>
            <div className={cx('title')}>CHỌN KỲ TUYỂN SINH</div>
            <div className={cx('wrapper-listitem')}>
              {data !== undefined &&
                data.map((item, index) => {
                  return <TSItem id={item.id} key={index} classE={item.class} title={item.title} />;
                })}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default DKTSPage;

export const TSItem = ({ id, classE, title }) => {
  return (
    <Row className={cx('wrapper-item')}>
      <Col xxl={2} xl={2} lg={2} md={2} sm={12} xs={12}>
        <div className={cx('class', `${id === 2 ? 'id2' : id === 3 ? 'id3' : id === 4 ? 'id4' : ''}`)}>{classE}</div>
      </Col>
      <Col xxl={7} xl={7} lg={7} md={7} sm={12} xs={12}>
        <div className={cx('content')}>
          <div className={cx('content-top')}>{title}</div>
          <div className={cx('content-bot')}>Từ ngày 04/07/2022 đến 06/07/2022</div>
        </div>
      </Col>
      <Col xxl={3} xl={3} lg={3} md={3} sm={12} xs={12}>
        <div className={cx('register')}>Hết hạn đăng ký</div>
      </Col>
    </Row>
  );
};
