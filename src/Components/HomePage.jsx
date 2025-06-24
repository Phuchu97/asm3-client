import { motion } from 'framer-motion';
import '../css/homepage.css';
import CategoriesComponent from './Categories';
import SlideMiddleComponent from './SlideMiddle';
import ProductsComponent from './Products';
import NangLucComponent from './NangLuc';
import DoiTacComponent from './DoiTac';

const features = [
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Chất lượng thép vượt trội',
    desc: 'Sản phẩm đạt tiêu chuẩn quốc tế, kiểm định nghiêm ngặt.'
  },
  {
    icon: 'fa-solid fa-industry',
    title: 'Công nghệ hiện đại',
    desc: 'Dây chuyền sản xuất tiên tiến, tự động hóa cao.'
  },
  {
    icon: 'fa-solid fa-handshake',
    title: 'Đối tác tin cậy',
    desc: 'Hợp tác với nhiều nhà máy, công ty lớn trong và ngoài nước.'
  },
  {
    icon: 'fa-solid fa-truck-fast',
    title: 'Giao hàng nhanh chóng',
    desc: 'Đáp ứng tiến độ, hỗ trợ vận chuyển toàn quốc.'
  },
];

function HomePageComponent() {
  return (
    <div className="homepage-industrial">
      {/* Banner + Danh mục sản phẩm */}
      <motion.section initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <CategoriesComponent />
      </motion.section>
      {/* Slide middle: giới thiệu nổi bật - Bỏ thẻ motion.section bao bọc */}
      <SlideMiddleComponent />
      {/* Sản phẩm nổi bật */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}>
        <ProductsComponent />
      </motion.section>
      {/* Năng lực */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }}>
        <NangLucComponent />
      </motion.section>
      {/* Đối tác */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }}>
        <DoiTacComponent />
      </motion.section>
    </div>
  );
}

export default HomePageComponent;