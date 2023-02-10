import { routePath } from '~/routing/pathRouting';
// Import icon
import icon1 from '~/assets/img/menu/icon1.svg';
import icon2 from '~/assets/img/menu/icon2.svg';
import icon3 from '~/assets/img/menu/icon3.svg';
import icon4 from '~/assets/img/menu/icon4.svg';
import icon5 from '~/assets/img/menu/icon5.svg';
import icon6 from '~/assets/img/menu/icon6.svg';

const data = [
  { id: 1, img: icon1, title: 'Quy định tuyển sinh', link: routePath.QDTS },
  { id: 2, img: icon2, title: 'Thông tin tuyển sinh', link: routePath.TTTS },
  { id: 3, img: icon3, title: 'Đăng ký tuyển sinh', link: routePath.DKTS },
  { id: 4, img: icon4, title: 'Tra cứu kết quả', link: routePath.TCKQ },
  { id: 5, img: icon5, title: 'Hướng dẫn đăng ký', link: routePath.HDDK },
  { id: 6, img: icon6, title: 'Tra cứu kết quả vào 10', link: routePath.TCDT },
];

export default data;
