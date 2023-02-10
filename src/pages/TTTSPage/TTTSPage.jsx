import React, { useState } from 'react';

// Import react-bootstrap
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';

// Import formik and yup
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

// Input components
import ResultQDTS from '~/libraries/components/ResultQDTS/ResultQDTS';
import { SelectInput } from '~/libraries/components/SelectInput/SelectInput';
import useDocument from '~/hooks/redux/document/useDocument';

// Css module
import classNames from 'classnames/bind';
import styles from './_TTTSPage.module.scss';
const cx = classNames.bind(styles);

function TTTSPage() {
  const { document } = useDocument();

  const [idTotal, setIDTotal] = useState({ district: null, schoollevel: null, schoolyear: null, schoolname: null });
  // test
  const optionDistrict = [
    { value: 1, label: 'Quận Ba Đình ' },
    { value: 2, label: 'Quận Hoàn Kiếm' },
    { value: 3, label: 'Quận Tây Hồ' },
    { value: 4, label: 'Quận Long Biên' },
    { value: 5, label: 'Quận Cầu Giấy' },
  ];
  const schoollevel = [
    { value: 1, label: 'Mầm non' },
    { value: 2, label: 'Tiểu học' },
    { value: 3, label: 'Trung học cơ sở' },
    { value: 4, label: 'Trung học phổ thông' },
  ];
  const schoolyear = [
    { value: 1, label: '2021-2022' },
    { value: 2, label: '2022-2023' },
    { value: 3, label: '2023-2024' },
  ];
  const schoolname = [
    { value: 1, label: 'Đại học Mỏ Địa Chất' },
    { value: 2, label: 'Học viện tài chính' },
    { value: 3, label: 'Học viện cảnh sát nhân dân' },
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
                district: '',
                schoollevel: '',
                schoolyear: '',
                schoolname: '',
              }}
              validationSchema={Yup.object({
                district: idTotal.district ? null : Yup.string().required('Vui lòng chọn quận/ huyện'),
                schoollevel: idTotal.schoollevel ? null : Yup.string().required('Vui lòng chọn cấp học'),
                schoolyear: idTotal.schoolyear ? null : Yup.string().required('Vui lòng chọn năm học'),
                schoolname: idTotal.schoolname ? null : Yup.string().required('Vui lòng chọn tên trường'),
              })}
              onSubmit={handleSubmit}
            >
              {(formikProps) => {
                const { values, touched, errors, setFieldValue, setFieldTouched } = formikProps;
                return (
                  <Form>
                    <div className={cx('wrapper')}>THÔNG TIN TUYỂN SINH</div>
                    {/* Start chon quan huyen */}
                    <div>
                      {errors.district && touched.district ? (
                        <span className={cx('text-user', 'active')}>{errors.district}</span>
                      ) : (
                        <span className={cx('text-user')}>
                          {' '}
                          <p style={{ color: 'red', display: 'inline-block', marginRight: '6px', fontWeight: 'bold' }}>*</p>Quận/ Huyện
                        </span>
                      )}

                      <SelectInput
                        option={optionDistrict}
                        span="Quận/ Huyện"
                        error={errors.district && touched.schoollevel}
                        id="district"
                        type="text"
                        text="Giới tính"
                        placeholder="-- Chọn --"
                        value={values.district}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        name="district"
                      />
                    </div>
                    {/* End chon quan huyen */}

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

                    {/* Start chon năm học */}
                    <div>
                      {errors.schoolyear && touched.schoolyear ? (
                        <span className={cx('text-user', 'active')}>{errors.schoolyear}</span>
                      ) : (
                        <span className={cx('text-user')}>
                          {' '}
                          <p style={{ color: 'red', display: 'inline-block', marginRight: '6px', fontWeight: 'bold' }}>*</p>Năm học
                        </span>
                      )}

                      <SelectInput
                        option={schoolyear}
                        span="Quận/ Huyện"
                        error={errors.schoolyear && touched.schoolyear}
                        id="schoolyear"
                        type="text"
                        text="Năm học"
                        placeholder="-- Chọn --"
                        value={values.schoolyear}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        name="schoolyear"
                      />
                    </div>
                    {/* End chon năm học */}

                    {/* Start chon tên trường */}
                    <div>
                      {errors.schoolname && touched.schoolname ? (
                        <span className={cx('text-user', 'active')}>{errors.schoolname}</span>
                      ) : (
                        <span className={cx('text-user')}>Tên trường</span>
                      )}

                      <SelectInput
                        option={schoolname}
                        span="Quận/ Huyện"
                        error={errors.schoolname && touched.schoolname}
                        id="schoolname"
                        type="text"
                        text="Giới tính"
                        placeholder="-- Chọn --"
                        value={values.schoolname}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        name="schoolname"
                      />
                    </div>
                    {/* End chon tên trường */}

                    <div className={cx('wrapper-button')}>
                      <button type="submit" className={cx('button')}>
                        Tìm kiếm
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </Col>
        </Row>
      </Container>
      <div>
        <ResultQDTS />
      </div>
    </Container>
  );
}

export default TTTSPage;
