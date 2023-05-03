import { useNavigate,Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import '../css/footer.css';

function FooterComponent() {

  const handleOnTop = () => {
    window.scroll({top: 0, left: 0, behavior: 'smooth' });
  }

  return (
    <div className="footer ">
        <div className="footer-content row">
          <div className="col-4 footer-content-item">
            <h6>CUSTOMER SERVICES</h6>
            <a href="#">Hele & contact Us</a>
            <a href="#">Returns & Refunds</a>
            <a href="#">Online stores</a>
            <a href="#">Term & Conditions</a>
          </div>

          <div className="col-4 footer-content-item">
            <h6>COMPANY</h6>
            <a href="#">What We Do</a>
            <a href="#">Available Services</a>
            <a href="#">Latest Pasts</a>
            <a href="#">FAQs</a>
          </div>

          <div className="col-4 footer-content-item">
            <h6>SOCIAL MEDIA</h6>
            <a href="#">Telegram</a>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Youtube</a>
          </div>
        </div>
        <div className="on-top" onClick={handleOnTop}><i class="fa-solid fa-chevron-up"></i></div>
    </div>
  );
}

export default FooterComponent;