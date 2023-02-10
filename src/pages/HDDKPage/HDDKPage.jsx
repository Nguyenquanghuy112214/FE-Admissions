import React from 'react';
import useDocument from '~/hooks/redux/document/useDocument';

function HDDKPage() {
  const { document } = useDocument();

  return (
    <div>
      <title>{document.title}</title>
      HDDKPage
    </div>
  );
}

export default HDDKPage;
