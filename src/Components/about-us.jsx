// src/AboutUs.js
import React from 'react';
import '../css/aboutUs.css'

const AboutUs = () => {
  return (
    <div className='about-us'>
      <div className="head-floor"></div>
      <div className="container mt-4 p-4 bg-light rounded">
      <h1 className="mb-4">Giới Thiệu Về Công Ty TNHH Thép Vượng Phát</h1>
      <div className="text-center mb-4">
        <img src="/path-to-your-image.jpg" alt="Công ty TNHH Thép Vượng Phát" className="img-fluid" />
      </div>
      <p className="mb-4">
        Công ty TNHH Thép Vượng Phát có nhà máy rộng gần 5000m2, chuyên sản xuất và gia công các loại dây đai thép, bọ thép, và cung cấp các loại tôn cuộn. Với nhiều năm kinh nghiệm trong ngành, chúng tôi cam kết mang đến cho khách hàng những sản phẩm chất lượng cao và dịch vụ tốt nhất.
      </p>
      <p className="mb-4">
        Nhà máy của chúng tôi được trang bị máy móc hiện đại và đội ngũ nhân viên chuyên nghiệp, luôn đảm bảo tiến độ sản xuất và chất lượng sản phẩm. Chúng tôi tự hào là đối tác tin cậy của nhiều doanh nghiệp trong và ngoài nước.
      </p>
      <p className="mb-4">
        Sản phẩm của chúng tôi bao gồm:
      </p>
      <ul className="mb-4">
        <li>Dây đai thép</li>
        <li>Bọ thép</li>
        <li>Tôn cuộn</li>
      </ul>
      <p className="mb-4">
        Hãy liên hệ với chúng tôi để biết thêm chi tiết về sản phẩm và dịch vụ của chúng tôi. Chúng tôi rất mong được hợp tác và phục vụ quý khách.
      </p>
    </div>
    </div>
  );
};

export default AboutUs;
