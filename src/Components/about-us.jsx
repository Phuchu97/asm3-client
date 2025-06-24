// src/AboutUs.js
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../css/aboutUs.css';
import about1 from '../assets/images/about1.jpg';
import about3 from '../assets/images/about3.jpg';
import about4 from '../assets/images/about4.jpg';
import about7 from '../assets/images/about7.jpg';

const aboutImages = [about4, about3, about7];

const features = [
  {
    icon: 'fa-solid fa-handshake',
    title: 'Sản Phẩm Chính Hãng',
    desc: 'Các loại thiết bị, máy đóng gói, dụng cụ hỗ trợ đến từ các thương hiệu lớn như: USA – SIGNODE, Thuỵ Sĩ – ORGAPACK, Đài Loan – YBICO',
  },
  {
    icon: 'fa-solid fa-thumbs-up',
    title: 'Chất Lượng Hoàn Hảo',
    desc: 'Sản phẩm có chất lượng TỐT, độ bền CAO, giá thành RẺ, phù hợp với mọi đối tượng khách hàng và thân thiện với môi trường.',
  },
  {
    icon: 'fa-solid fa-award',
    title: 'Đa Dạng Chủng Loại',
    desc: 'Chúng tôi cung cấp đa dạng các sản phẩm dùng trong đóng gói công nghiệp và các loại thiết bị, máy đóng gói,...',
  },
  {
    icon: 'fa-solid fa-users',
    title: 'Dịch Vụ Chuyên Nghiệp',
    desc: 'Giao hàng nhanh chóng trên toàn quốc. Hỗ trợ tư vấn nhiệt tình. Giá thành hợp lý, chiết khấu hấp dẫn cho các đơn hàng lớn.',
  },
];

const AboutUs = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % aboutImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="aboutus-industrial">
      {/* Banner slideshow */}
      <motion.div className="aboutus-banner" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <div className="aboutus-banner-slider">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={aboutImages[current]}
              alt={`about-slide-${current}`}
              className="aboutus-banner-img"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.08 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
          <div className="aboutus-banner-overlay"></div>
        </div>
        <motion.div className="aboutus-banner-content" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
          <h1>CÔNG TY TNHH THÉP VƯỢNG PHÁT</h1>
          <p>SƠ LƯỢC VỀ CHÚNG TÔI</p>
        </motion.div>
      </motion.div>

      {/* Section: Năng lực & Lịch sử */}
      <motion.section className="aboutus-section" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <div className="aboutus-section-content">
          <div className="aboutus-section-text">
            <h2>Quy mô nhà xưởng</h2>
            <p>
              Công ty TNHH Thép Vượng Phát có nhà máy rộng gần 5000m2, chuyên sản xuất và gia công các loại dây đai thép, bọ thép, và cung cấp các loại tôn cuộn. Với nhiều năm kinh nghiệm trong ngành, chúng tôi cam kết mang đến cho khách hàng những sản phẩm chất lượng cao và dịch vụ tốt nhất.
            </p>
          </div>
          <div className="aboutus-section-img">
            <img src={about1} alt="Nhà xưởng Vượng Phát" />
          </div>
        </div>
      </motion.section>
      <motion.section className="aboutus-section" initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
        <div className="aboutus-section-content reverse">
          <div className="aboutus-section-img">
            <img src={about3} alt="Kỹ thuật tiên tiến" />
          </div>
          <div className="aboutus-section-text">
            <h2>Kỹ thuật tiên tiến</h2>
            <p>
              Nhà máy của chúng tôi được trang bị máy móc hiện đại và đội ngũ nhân viên chuyên nghiệp, luôn đảm bảo tiến độ sản xuất và chất lượng sản phẩm. Chúng tôi tự hào là đối tác tin cậy của nhiều doanh nghiệp trong và ngoài nước.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Section: Sản phẩm chính */}
      <motion.section className="aboutus-products" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <h2>SẢN PHẨM CHÍNH</h2>
        <div className="aboutus-products-list">
          <div className="aboutus-product-card highlight">
            <img src="https://firebasestorage.googleapis.com/v0/b/funix-chat.appspot.com/o/images%2Fton%20thep%203.png14dbe357-2f41-4642-9b1e-fd70db5023bf?alt=media&token=8a4df8ce-9975-49fb-85a1-a8052495f626" alt="Tôn cuộn" />
            <div className="aboutus-product-title">Tôn cuộn</div>
          </div>
          <div className="aboutus-product-card highlight">
            <img src="https://firebasestorage.googleapis.com/v0/b/funix-chat.appspot.com/o/images%2Fsteel-strapping-seal-500x500.webp47029f71-b97b-45af-a0cf-d91b5937ae84?alt=media&token=c8536cc2-f141-4955-a480-7b3a77056bf6" alt="Bọ thép" />
            <div className="aboutus-product-title">Bọ thép</div>
          </div>
          <div className="aboutus-product-card highlight">
            <img src="https://firebasestorage.googleapis.com/v0/b/funix-chat.appspot.com/o/images%2Fd%C3%A2y-%C4%91ai-th%C3%A9p-d%E1%BA%A7u.jpg6ed19411-b1b7-4847-b3ae-994aaea3c627?alt=media&token=c834b8d7-4b9b-4a3c-b50f-d7ae1aff3609" alt="Dây đai thép" />
            <div className="aboutus-product-title">Dây đai thép</div>
          </div>
        </div>
      </motion.section>

      {/* Section: Uy tín */}
      <motion.section className="aboutus-features" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <h2 className="aboutus-features-title">NHỮNG ĐIỀU TẠO NÊN UY TÍN CỦA CHÚNG TÔI</h2>
        <div className="aboutus-features-list">
          {features.map((f, idx) => (
            <div className="aboutus-feature-card" key={idx}>
              <i className={f.icon + ' aboutus-feature-icon'}></i>
              <div className="aboutus-feature-title">{f.title}</div>
              <div className="aboutus-feature-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;
