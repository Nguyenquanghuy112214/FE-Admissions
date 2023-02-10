import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';

// Import formik and yup
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

// Input components
import { SelectInput } from '~/libraries/components/SelectInput/SelectInput';
import { Input } from '~/libraries/components/Input/Input';
import useDocument from '~/hooks/redux/document/useDocument';

// Css module
import classNames from 'classnames/bind';
import styles from './_TCDTPage.module.scss';
const cx = classNames.bind(styles);
function TCDTPage() {
  const { document } = useDocument();

  const [idTotal, setIDTotal] = useState({ schoollevel: null });
  // test

  const schoollevel = [
    { value: 1, label: 'Mầm non' },
    { value: 2, label: 'Tiểu học' },
    { value: 3, label: 'Trung học cơ sở' },
    { value: 4, label: 'Trung học phổ thông' },
  ];
  
  // Submit
  const handleSubmit = () => {
    Swal.fire({
      title: 'Lỗi nhé',

      icon: 'warning',
    });
  };
  return (
    <Container fluid className={cx('container-qdts-fluid')}>
    <title>{document.title}</title>
    <Container className={cx('container-qdts')}>
      <Row className={cx('row-qdts', 'justify-content-center')}>
        <Col xxl={6} xl={6} lg={7} md={8}>
          <Formik
            initialValues={{
              schoollevel: '',
              identifier: '',
            }}
            validationSchema={Yup.object({
              schoollevel: idTotal.schoollevel ? null : Yup.string().required('Vui lòng chọn cấp học'),
              identifier:  Yup.string().required('Vui lòng nhập mã định danh'),
          
            })}
            onSubmit={handleSubmit}
          >
            {(formikProps) => {
              const { values, touched, errors, setFieldValue, setFieldTouched } = formikProps;
              return (
                <Form>
                  <div className={cx('wrapper')}>TRA CỨU ĐIỂM THI VÀO 10</div>
                  {/* Start chon cấp học */}
                  <div>
                    {errors.schoollevel && touched.schoollevel ? (
                      <span className={cx('text-user', 'active')}>{errors.schoollevel}</span>
                    ) : (
                      <span className={cx('text-user')}>
                        <p style={{ color: 'red', display: 'inline-block', marginRight: '6px', fontWeight: 'bold' }}>*</p>Cấp học
                      </span>
                    )}

                    <SelectInput
                      option={schoollevel}
                      span="Cấp học"
                      error={errors.schoollevel && touched.schoollevel}
                      id="schoollevel"
                      type="text"
                      text="Giới tính"
                      placeholder="-- Chọn --"
                      value={values.schoollevel}
                      onChange={setFieldValue}
                      onBlur={setFieldTouched}
                      name="schoollevel"
                    />
                  </div>
                  {/* End chon cấp học */}


                  {/* Start chon cấp học */}
                  <div>
                  {errors.identifier && touched.identifier ? (
                    <span className={cx('text-user', 'active')}>{errors.identifier}</span>
                  ) : (
                    <span className={cx('text-user')}> <p style={{ color: 'red', display: 'inline-block', marginRight: '6px', fontWeight: 'bold' }}>*</p>Mã định danh</span>
                  )}
                  <Input
                    error={errors.identifier && touched.identifier}
                    id="identifier"
                    type="text"
                    text="Nhập mã định danh"
                    placeholder="Nhập mã định danh"
                    name="identifier"
                  />
                </div>
                  {/* End chon cấp học */}


                  <div className={cx('wrapper-button')}>
                    <button type="submit" className={cx('button')}>
                      Tra cứu
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </Col>
      </Row>
    </Container>
  </Container>
  );
}

export default TCDTPage;
