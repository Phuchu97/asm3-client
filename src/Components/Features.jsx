import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import '../css/features.css'

const features = [
  {
    icon: 'fa-handshake',
    title: 'Sản Phẩm Chính Hãng',
    description: 'Các loại thiết bị, máy đóng gói, dụng cụ hỗ trợ đến từ các thương hiệu lớn như: USA – SIGNODE, Thuỵ Sĩ – ORGAPACK, Đài Loan – YBICO',
  },
  {
    icon: 'fa-thumbs-up',
    title: 'Chất Lượng Hoàn Hảo',
    description: 'Sản phẩm có chất lượng TỐT, độ bền CAO, giá thành RẺ, phù hợp với mọi đối tượng khách hàng và thân thiện với môi trường.',
  },
  {
    icon: 'fa-award',
    title: 'Đa Dạng Chủng Loại',
    description: 'Chúng tôi cung cấp đa dạng các sản phẩm dùng trong đóng gói công nghiệp và các loại thiết bị, máy đóng gói,...',
  },
  {
    icon: 'fa-users',
    title: 'Dịch Vụ Chuyên Nghiệp',
    description: 'Giao hàng nhanh chóng trên toàn quốc. Hỗ trợ tư vấn nhiệt tình. Giá thành hợp lý, chiết khấu hấp dẫn cho các đơn hàng lớn.',
  },
];

const FeaturesComponent = () => {
  return (
    <Container className="features-container" data-aos="fade-up" data-aos-duration="1000">
      <Typography style={{ padding: "80px 0 80px 0", fontSize: '36px', fontWeight: 700, fontFamily: "fangsong" }} marginBottom={4} variant="h4" component="h2" gutterBottom align="center">
        NHỮNG ĐIỀU TẠO NÊN UY TÍN CỦA CHÚNG TÔI
      </Typography>
      <Grid container spacing={6}>
        {features.map((feature, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <Box className="feature-box">
              <i style={{color: 'rgb(0, 96, 57)'}} className={`fas ${feature.icon} feature-icon`}></i>
              <Typography variant="h6" component="h3" className="feature-title">
                {feature.title}
              </Typography>
              <Typography fontSize={14} variant="body1">
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturesComponent;
