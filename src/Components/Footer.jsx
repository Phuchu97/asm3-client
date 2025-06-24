import { Link } from "react-router-dom";
import '../css/footer.css';
import logo from '../assets/images/logo.svg';

function FooterComponent() {
  return (
    <footer className="footer-industrial">
      <div className="footer-main">
        <div className="footer-col footer-logo-col">
          <img src={logo} alt="Logo VuongPhat Steel" className="footer-logo" />
          <div className="footer-company">CÔNG TY TNHH THÉP VƯỢNG PHÁT</div>
          <div className="footer-slogan">Uy tín - Chất lượng - Chuyên nghiệp</div>
        </div>
        <div className="footer-col footer-contact-col">
          <div className="footer-title">Liên hệ</div>
          <div className="footer-contact-item"><i className="fa-solid fa-envelope"></i> vuongphatsteel@gmail.com</div>
          <div className="footer-contact-item"><i className="fa-solid fa-phone"></i> 0967 870 722</div>
          <div className="footer-contact-item"><i className="fa-solid fa-location-dot"></i> Nhà máy: Xã Vĩnh Ninh, H. Vĩnh Tường, Vĩnh Phúc</div>
          <div className="footer-contact-item"><i className="fa-solid fa-location-dot"></i> CN: 61 tổ 10, phố Mậu Lương, P. Kiến Hưng, Q. Hà Đông, Hà Nội</div>
        </div>
        <div className="footer-col footer-nav-col">
          <div className="footer-title">Menu</div>
          <Link to="/" className="footer-link">Trang chủ</Link>
          <Link to="/product-list" className="footer-link">Sản phẩm</Link>
          <Link to="/about-us" className="footer-link">Giới thiệu</Link>
          <Link to="/contact" className="footer-link">Liên hệ</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} VuongPhat Steel. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default FooterComponent;