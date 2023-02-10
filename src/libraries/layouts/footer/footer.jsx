import { Container, Row, Col } from 'react-bootstrap';
// Css module
import classNames from 'classnames/bind';
import styles from './_footer.module.scss';
const cx = classNames.bind(styles);
export default function MainFooter() {
  return (
    <Container fluid className={cx('container-footer')}>
      <div className={cx('title')}>Cổng thông tin tuyển sinh</div>
      <div className={cx('sub-title')}>Tổng đài hỗ trợ - Email:bkt@gmail.com</div>
    </Container>
  );
}
