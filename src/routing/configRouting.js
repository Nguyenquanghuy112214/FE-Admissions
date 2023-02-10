// Layout
import { lazy } from 'react';
import { routePath } from './pathRouting';

const configRoutes = [
  {
    path: routePath.HomePage,
    element: lazy(() => import('~/pages/HomePage/HomePage')),
    icons: '',
    name: 'Home',
    hiddenMenu: false,
    title:"Cổng thông tin tuyển sinh"
  },
  {
    path: routePath.QDTS,
    element: lazy(() => import('~/pages/QDTSPage/QDTSPage')),
    icons: '',
    name: 'QUY ĐỊNH TUYỂN SINH',
    hiddenMenu: false,
    layout: 'navigation',
    title:"Quy định tuyển sinh"
    
  },
  {
    path: routePath.TTTS,
    element: lazy(() => import('~/pages/TTTSPage/TTTSPage')),
    icons: '',
    name: 'THÔNG TIN TUYỂN SINH',
    hiddenMenu: false,
    layout: 'navigation',
    title:"Thông tin tuyển sinh"

  },
  {
    path: routePath.DKTS,
    element: lazy(() => import('~/pages/DKTSPage/DKTSPage')),
    icons: '',
    name: 'ĐĂNG KÝ TUYỂN SINH',
    hiddenMenu: false,
    layout: 'navigation',
    title:"Đăng ký tuyển sinh"

  },
  {
    path: routePath.TCKQ,
    element: lazy(() => import('~/pages/TCKQPage/TCKQPage')),
    icons: '',
    name: 'TRA CỨU KẾT QUẢ',
    hiddenMenu: false,
    layout: 'navigation',
    title:"Tra cứu kết quả"

  },
  {
    path: routePath.HDDK,
    element: lazy(() => import('~/pages/HDDKPage/HDDKPage')),
    icons: '',
    name: 'HƯỚNG DẪN ĐĂNG KÝ',
    hiddenMenu: false,
    layout: 'navigation',
    title:"Hướng dẫn đăng ký"

  },
  {
    path: routePath.TCDT,
    element: lazy(() => import('~/pages/TCDTPage/TCDTPage')),
    icons: '',
    name: 'TRA CỨU ĐIỂM THI VÀO 10',
    hiddenMenu: false,
    layout: 'navigation',
    title:"Tra cứu điểm thi vào 10"

  },

  // Not Found
  {
    path: '*',
    element: lazy(() => import('~/pages/NotFound/NotFound')),
    hiddenMenu: true,
  },
];

export default configRoutes;
