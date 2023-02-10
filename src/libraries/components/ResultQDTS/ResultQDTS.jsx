import React, { useState } from 'react';
// Import react-bootstrap
import { Container, Row, Col } from 'react-bootstrap';

// Import motion
import { motion } from 'framer-motion';

// Css module
import classNames from 'classnames/bind';
import styles from './_ResultQDTS.module.scss';
const cx = classNames.bind(styles);

function ResultQDTS() {
  const fakeData = [
    { id: 1, title: 'Trường A', subtitle: '123 123' },
    { id: 2, title: 'Trường B', subtitle: ' 123123123' },
    { id: 3, title: 'Trường C', subtitle: ' 123123123' },
    { id: 4, title: 'Trường D', subtitle: ' 123123123' },
  ];
  const [idActive, setIdActive] = useState(null);

  const handleClick = (item) => {
    if (item.id === idActive) {
      setIdActive(null);
    } else {
      setIdActive(item.id);
    }
  };
  return (
    <Container>
      <Row className={cx('justify-content-center')}>
        <Col xxl={10} xl={10} lg={9} md={9}>
          <div className={cx('wrapper')}>
            <div className={cx('title')}>DANH SÁCH CÁC TRƯỜNG TUYỂN SINH</div>
            <ul className={cx('list-school')}>
              {fakeData !== undefined &&
                fakeData.map((item, index) => {
                  return (
                    <li onClick={() => handleClick(item)} key={index} className={cx('detail-school')}>
                      <div className={cx('title2')}>{item.title}</div>

                      <motion.div
                        initial={{ height: 0, opacity: 0, overflow: 'hidden' }}
                        animate={{
                          height: idActive === item.id ? 'auto' : 0,
                          opacity: idActive === item.id ? 1 : 0,
                          overflow: idActive === item.id ? 'visible' : 'hidden',
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className={cx('detail-school__result')}
                      >
                        <div className={cx('detail-school__result2')}>{item.subtitle}</div>
                      </motion.div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ResultQDTS;
