import { useState } from 'react';
import { motion } from 'framer-motion';
import '../css/contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Xử lý gửi form ở đây nếu cần
  };

  return (
    <div className="contact-industrial">
      <motion.div className="contact-header" initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <h1>Liên hệ với chúng tôi</h1>
        <p>Vui lòng điền thông tin, chúng tôi sẽ phản hồi sớm nhất!</p>
      </motion.div>
      <div className="contact-content">
        <motion.form className="contact-form" onSubmit={handleSubmit} initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <input type="text" name="name" placeholder="Họ và tên" value={form.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Số điện thoại" value={form.phone} onChange={handleChange} required />
          <textarea name="message" placeholder="Nội dung liên hệ" value={form.message} onChange={handleChange} required rows={4} />
          <button type="submit">Gửi liên hệ</button>
          {submitted && <div className="contact-success">Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.</div>}
        </motion.form>
        <motion.div className="contact-info" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <div className="contact-info-title">Thông tin công ty</div>
          <div className="contact-info-item"><i className="fa-solid fa-envelope"></i> vuongphatsteel@gmail.com</div>
          <div className="contact-info-item"><i className="fa-solid fa-phone"></i> 0967 870 722</div>
          <div className="contact-info-item"><i className="fa-solid fa-location-dot"></i> Nhà máy: Xã Vĩnh Ninh, H. Vĩnh Tường, Vĩnh Phúc</div>
          <div className="contact-info-item"><i className="fa-solid fa-location-dot"></i> CN: 61 tổ 10, phố Mậu Lương, P. Kiến Hưng, Q. Hà Đông, Hà Nội</div>
          <div className="contact-info-map">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.006234833635!2d105.7744253154027!3d21.03623779287659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab3e2e2e2e2e%3A0x1234567890abcdef!2zVmnhu4duIE5pbmgsIFbEqW5oIFThuqVuZywgVsOtbmggUGjDumMsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1680000000000!5m2!1svi!2s"
              width="100%"
              height="180"
              style={{ border: 0, borderRadius: '12px', marginTop: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 