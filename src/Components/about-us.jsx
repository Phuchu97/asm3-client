// src/AboutUs.js
import React, { useEffect } from 'react';
import '../css/aboutUs.css';
import Slider from 'react-slick';
import { Grid, Typography, Button, Box } from "@mui/material";
const AboutUs = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    rows: 1,
  };
  return (
    <div className='about-us'>
      <div className='slide-about'>
        <Slider {...settings}>
          <Grid style={{ position: 'relative' }} className="slide-about-item">
            <div style={{ position: 'absolute', inset: 0, backgroundColor: "#000", opacity: "0.4", bottom: '4px' }}></div>
            <img src={require("../assets/images/about4.jpg")} alt="product" />
          </Grid>
          <Grid style={{ position: 'relative' }} className="slide-about-item">
            <img src={require("../assets/images/about3.jpg")} alt="product" />
          </Grid>
          <Grid style={{ position: 'relative' }} className="slide-about-item">
            <img src={require("../assets/images/about7.jpg")} alt="product" />
          </Grid>
        </Slider>
      </div>
      <div className="text-slide">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h2>CÔNG TY TNHH THÉP VƯỢNG PHÁT</h2>
          <p>SƠ LƯỢC VỀ CHÚNG TÔI</p>
        </div>
      </div>
      <h2 className="text-center" data-aos="fade-up" style={{ color: "#006039", padding: "80px 0 80px 0", fontSize: '36px', fontWeight: 700, fontFamily: "fangsong" }}>Năng Lực Của Chúng Tôi</h2>
      <div className="container" style={{ backgroundColor: "#ffffff" }}>
        <div
          className="row"
          data-aos="fade-up"
          data-aos-duration="1200"
          style={{ marginBottom: '80px' }}
        >
          <div className="col-md-6 content-1" style={{ display: "flex", justifyContent: 'center', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '36px', fontWeight: 700, fontFamily: "fangsong" }}>Quy mô nhà xưởng</h3>
            <p >
              Công ty TNHH Thép Vượng Phát có nhà máy rộng gần 5000m2, chuyên sản xuất và gia công các loại dây đai thép, bọ thép, và cung cấp các loại tôn cuộn. Với nhiều năm kinh nghiệm trong ngành, chúng tôi cam kết mang đến cho khách hàng những sản phẩm chất lượng cao và dịch vụ tốt nhất.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img style={{ height: '443px', objectFit: 'cover', width: '100%' }} src={require("../assets/images/about1.jpg")} alt="Công ty TNHH Thép Vượng Phát" className="img-fluid rounded shadow" />
          </div>
        </div>
        <div className="row" data-aos="fade-up" data-aos-duration="1200" style={{ marginBottom: '80px' }}>
          <div className="col-md-6 text-center">
            <img
              style={{ height: '443px', objectFit: 'cover', width: '100%' }}
              src={require("../assets/images/about3.jpg")}
              alt="Công ty TNHH Thép Vượng Phát"
              className="img-fluid rounded shadow"
            />
          </div>
          <div
            className="col-md-6 content-1"
            style={{ display: "flex", justifyContent: 'center', flexDirection: 'column' }}
          >
            <h3 style={{ fontSize: '36px', fontWeight: 700, fontFamily: "fangsong" }}>Kỹ thuật tiên tiến</h3>
            <p>
              Nhà máy của chúng tôi được trang bị máy móc hiện đại và đội ngũ nhân viên chuyên nghiệp, luôn đảm bảo tiến độ sản xuất và chất lượng sản phẩm. Chúng tôi tự hào là đối tác tin cậy của nhiều doanh nghiệp trong và ngoài nước.
            </p>
          </div>
        </div>
      </div>
      <Grid className='about-des bg-light'>
        <div className="container rounded mt-4"  data-aos="fade-up" data-aos-duration="1400">
          <h2 className="mb-4 text-center about-title">Lịch Sử Hình Thành</h2>
          <p className="mb-4" data-aos="fade-up" data-aos-duration="1200">
            Được thành lập với mục tiêu cung cấp các giải pháp thép toàn diện, Công ty TNHH Thép Vượng Phát đã không ngừng phát triển và mở rộng quy mô sản xuất. Từ những ngày đầu tiên, chúng tôi đã luôn chú trọng vào việc đầu tư công nghệ và nâng cao chất lượng sản phẩm, nhờ đó mà trở thành đối tác tin cậy của nhiều doanh nghiệp trong và ngoài nước.
          </p>

          <h2 className="mb-4 text-center about-title">Sản Phẩm và Dịch Vụ</h2>
          <p className="mb-4 about-des-p">
            Chúng tôi chuyên sản xuất và gia công các loại:
          </p>
          <ul className="mb-4 about-des-p">
            <li>Dây đai thép: Sản phẩm chắc chắn, độ bền cao, phù hợp với nhiều loại hàng hóa.</li>
            <li>Bọ thép: Phụ kiện quan trọng trong việc đóng gói và vận chuyển.</li>
            <li>Tôn cuộn: Bao gồm tôn mạ kẽm, tôn mạ màu và tôn cán nguội, được sản xuất theo tiêu chuẩn quốc tế, đảm bảo độ bền và tính thẩm mỹ cao.</li>
          </ul>

          <h2 className="mb-4 text-center about-title">Cam Kết Chất Lượng</h2>
          <p className="mb-4 about-des-p">
            Chất lượng sản phẩm luôn là ưu tiên hàng đầu của chúng tôi. Với hệ thống quản lý chất lượng nghiêm ngặt, chúng tôi đảm bảo mỗi sản phẩm khi xuất xưởng đều đạt tiêu chuẩn cao nhất. Đội ngũ kỹ thuật viên chuyên nghiệp của chúng tôi luôn sẵn sàng tư vấn và hỗ trợ khách hàng một cách tận tâm.
          </p>

          <h2 className="mb-4 text-center about-title">Sứ Mệnh và Tầm Nhìn</h2>
          <p className="mb-4 about-des-p">
            Sứ mệnh của chúng tôi là cung cấp các sản phẩm thép chất lượng, góp phần vào sự phát triển bền vững của ngành công nghiệp Việt Nam và thế giới.
          </p>
          <p className="mb-4 about-des-p">
            Tầm nhìn của chúng tôi là trở thành nhà cung cấp thép hàng đầu tại Việt Nam và mở rộng thị trường ra quốc tế, không ngừng đổi mới và phát triển để đáp ứng nhu cầu ngày càng cao của khách hàng.
          </p>
        </div>
      </Grid>
      <div className="container" style={{ backgroundColor: "#ffffff" }}>
        <div>
          <h2 className="text-center" data-aos="fade-up" style={{ color: "#006039", padding: "80px 0 80px 0", fontSize: '36px', fontWeight: 700, fontFamily: "fangsong" }}>
            Sản phẩm chính
          </h2>
          <Grid container>
            <Grid item md={4} lg={4} sm={6} xs={12} className="product-slide-item" marginBottom={'30px'}>
              <Grid className="product-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/funix-chat.appspot.com/o/images%2Fton%20thep%203.png14dbe357-2f41-4642-9b1e-fd70db5023bf?alt=media&token=8a4df8ce-9975-49fb-85a1-a8052495f626" alt="product" />
              </Grid>
              <Grid className="product-content">
                <Typography variant="h4">Tôn cuộn</Typography>
              </Grid>
            </Grid>
            <Grid item md={4} lg={4} sm={6} xs={12} className="product-slide-item" marginBottom={'30px'}>
              <Grid className="product-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/funix-chat.appspot.com/o/images%2Fbo%20thep%202.png5f3a1aff-23e4-4042-844e-9dc2b5024868?alt=media&token=bc11e39a-eb82-4da6-bcdf-50833b780259" alt="product" />
              </Grid>
              <Grid className="product-content">
                <Typography variant="h4">Bọ thép</Typography>
              </Grid>
            </Grid>
            <Grid item md={4} lg={4} sm={6} xs={12} className="product-slide-item" marginBottom={'30px'}>
              <Grid className="product-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/funix-chat.appspot.com/o/images%2Fd%C3%A2y-%C4%91ai-th%C3%A9p-d%E1%BA%A7u.jpg6ed19411-b1b7-4847-b3ae-994aaea3c627?alt=media&token=c834b8d7-4b9b-4a3c-b50f-d7ae1aff3609" alt="product" />
              </Grid>
              <Grid className="product-content">
                <Typography variant="h4">Dây đai thép</Typography>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
