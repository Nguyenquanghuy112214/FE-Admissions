import { useEffect, useState } from 'react';
import useDocument from '~/hooks/redux/document/useDocument';

//Import component
import HeaderMain from '~/libraries/layouts/headermain/HeaderMain';
import FooterMain from '~/libraries/layouts/footer/footer';

// Css module
import classNames from 'classnames/bind';
import styles from './_DefaultLayout.module.scss';
const cx = classNames.bind(styles);

function DefaultLayout({ children, title }) {
  const { setTitle } = useDocument();
  useEffect(() => {
    setTitle(title);
  }, [title]);

  return (
    <div className={cx('wrapper')}>
      <HeaderMain />
      {children}
      <FooterMain />
    </div>
  );
}

export default DefaultLayout;
