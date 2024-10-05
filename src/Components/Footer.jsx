import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import '../css/footer.css';
import { Grid, Box, Typography } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

function FooterComponent() {

  const handleOnTop = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  return (
    <Grid className="footer">
      <Grid container className="footer-content">
        <Grid item xs={12} sm={12} md={5} className="footer-content-item footer-content-left">
          <Grid container justifyContent={'space-around'}>
            <Grid item>
              <img src={require('../assets/images/logo2.jpg')} alt="Image Steel VuongPhat" />
            </Grid>
            <Grid item>
              <Box display={'flex'} alignItems={'center'} justifyContent={'center'} padding={'1.5rem 0'}>
                <Typography variant="h6">LIÊN HỆ VỚI CHÚNG TÔI</Typography>
              </Box>

              <Box display={'flex'} alignItems={'center'} justifyContent={'start'} padding={'1.2rem 0'}>
                <EmailIcon style={{ marginRight: '1rem', color: 'rgb(0, 96, 57)' }} />
                <Typography variant="h6">vuongphatsteel@gmail.com</Typography>
              </Box>

              <Box display={'flex'} alignItems={'center'} justifyContent={'start'} padding={'1.2rem 0'}>
                <LocalPhoneIcon style={{ marginRight: '1rem', color: 'rgb(0, 96, 57)' }} />
                <Typography variant="h6">0967 870 722</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={7} className="footer-content-item footer-content-right">
          <Grid container justifyContent={'space-around'}>
            <Grid xs={12} sm={12} md={6} item>
              <Box overflow={'hidden'} display={'flex'} alignItems={'center'} justifyContent={'center'} padding={'1.5rem 0'}>
                <img src={require('../assets/images/hanoi.png')} alt="Image Steel VuongPhat" />
              </Box>

              <Box display={'flex'} alignItems={'center'} justifyContent={'center'} padding={'1.2rem 0'}>
                <Typography style={{ width: '90%' }} variant="p">Chi nhánh: số nhà 61 tổ 10 khu giãn dân, phố Mậu Lương, phường Kiến Hưng, quận Hà Đông, Hà Nội</Typography>
              </Box>
            </Grid>

            <Grid xs={12} sm={12} md={6} item>
              <Box overflow={'hidden'} display={'flex'} alignItems={'center'} justifyContent={'center'} padding={'1.5rem 0'}>
                <img src={require('../assets/images/footer-VP.jpg')} alt="Image Steel VuongPhat" />
              </Box>

              <Box display={'flex'} alignItems={'center'} justifyContent={'center'} padding={'1.2rem 0'}>
                <Typography variant="p">Nhà máy sản xuất: Xã Vĩnh Ninh, Huyện Vĩnh Tường, Tỉnh Vĩnh Phúc</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box className="on-top" onClick={handleOnTop}><i className="fa-solid fa-chevron-up"></i></Box>
    </Grid>
  );
}

export default FooterComponent;