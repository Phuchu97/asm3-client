import { Link, useLocation } from "react-router-dom";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../css/navbar.css';
import logo from '../assets/images/logo.svg';

function NavbarComponent() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar-industrial">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar-logo-img" />
        </Link>
      </div>
      <ul className="navbar-menu">
        <li className={location.pathname === '/' ? 'active' : ''}><Link to="/">Trang chủ</Link></li>
        <li className={location.pathname.startsWith('/product') ? 'active' : ''}><Link to="/product-list">Sản phẩm</Link></li>
        <li className={location.pathname === '/about-us' ? 'active' : ''}><Link to="/about-us">Giới thiệu</Link></li>
        <li className={location.pathname === '/contact' ? 'active' : ''}><Link to="/contact">Liên hệ</Link></li>
      </ul>
      <div className="navbar-cta">
        <Link to="/contact" className="navbar-contact-btn">Liên hệ ngay</Link>
      </div>
      {/* Hamburger icon for mobile */}
      <div className="navbar-hamburger" onClick={() => setOpen(true)}>
        <span></span><span></span><span></span>
      </div>
      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div className="navbar-mobile-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="navbar-mobile-menu" initial={{ x: 300 }} animate={{ x: 0 }} exit={{ x: 300 }} transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
              <div className="navbar-mobile-header">
                <img src={logo} alt="Logo" className="navbar-logo-img" />
                <button className="navbar-mobile-close" onClick={() => setOpen(false)}>&times;</button>
              </div>
              <ul>
                <li className={location.pathname === '/' ? 'active' : ''} onClick={() => setOpen(false)}><Link to="/">Trang chủ</Link></li>
                <li className={location.pathname.startsWith('/product') ? 'active' : ''} onClick={() => setOpen(false)}><Link to="/product-list">Sản phẩm</Link></li>
                <li className={location.pathname === '/about-us' ? 'active' : ''} onClick={() => setOpen(false)}><Link to="/about-us">Giới thiệu</Link></li>
                <li className={location.pathname === '/contact' ? 'active' : ''} onClick={() => setOpen(false)}><Link to="/contact">Liên hệ</Link></li>
              </ul>
              <Link to="/contact" className="navbar-contact-btn mobile" onClick={() => setOpen(false)}>Liên hệ ngay</Link>
            </motion.div>
            <div className="navbar-mobile-bg" onClick={() => setOpen(false)}></div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavbarComponent;