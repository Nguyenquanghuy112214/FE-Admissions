import { useEffect } from 'react';
import useDocument from '~/hooks/redux/document/useDocument';
import HeaderSub from '~/libraries/layouts/headersub/HeaderSub';
import FooterMain from '~/libraries/layouts/footer/footer';

function NavigateHeaderLayout({ children, title }) {
  console.log('sdsdsd', window.location.pathname);
  const { setTitle } = useDocument();

  useEffect(() => {
    setTitle(title);
  }, [title]);
  
  return (
    <div
      style={{
        height: `${window.location.pathname === '/dkts' ? '100%' : ''}`,
        overflow: `${window.location.pathname === '/dkts' ? 'hidden' : ''}`,
      }}
    >
      <HeaderSub />
      {children}
      <FooterMain />
    </div>
  );
}

export default NavigateHeaderLayout;
