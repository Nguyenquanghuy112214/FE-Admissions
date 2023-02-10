import React, { useEffect } from 'react';
import useDocument from '~/hooks/redux/document/useDocument';

// Css module
import classNames from 'classnames/bind';
import styles from './_QDTSPage.module.scss';
const cx = classNames.bind(styles);

function QDTSPage() {
  const { document } = useDocument();

  return (
    <div>
      <title>{document.title}</title>
      QDTS
    </div>
  );
}

export default QDTSPage;
