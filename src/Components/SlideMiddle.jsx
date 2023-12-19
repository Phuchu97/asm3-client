import { useEffect, useState } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material'
import '../css/slidemiddle.css';
import EastIcon from '@mui/icons-material/East';
import { ColorRing } from 'react-loader-spinner';

function SlideMiddleComponent() {

    const [data, setData] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

    }, []);

    return (
        <Grid>
            {isLoading ? <Grid height={700} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#f0d29c', '#c5a568', '#ccb286', '#d2b789', '#afa999']}
                />
            </Grid> : <Grid container className='slide-middle'>
                <Grid item xs={12} sm={12} md={12} lg={6} className="slide-middle-content-left" display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Box className="slide-middle-content-text">
                        <Box data-aos="fade-up" data-aos-duration="1000">
                            <Typography variant='h2'>Công Ty TNHH Thép Vượng Phát</Typography>
                            <Box padding={'0 1.4rem'} style={{ textAlign: 'justify' }}>
                                <Typography variant='p' >Là Công ty sản xuất công nghiệp hàng đầu Việt Nam.
                                    Khởi đầu từ một Công ty chuyên buôn bán các loại máy xây dựng từ tháng 8/1992,
                                    Hòa Phát lần lượt mở rộng sang các lĩnh vực khác như Nội thất, ống thép, thép xây dựng,
                                    điện lạnh, bất động sản và nông nghiệp.
                                    Ngày 15/11/2007, Hòa Phát chính thức niêm yết cổ phiếu trên thị trường chứng khoán Việt Nam với mã chứng khoán HPG.
                                </Typography>
                            </Box>
                        </Box>
                        <Box display={'flex'} justifyContent={'center'} paddingTop={'4rem'}>
                            <Button style={{ fontSize: '16px', padding: '10px', color: '#8e4c00' }} endIcon={<EastIcon style={{ color: '#006039' }} />}>
                                Tìm hiểu thêm
                            </Button>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={6} className="slide-middle-content-right" data-aos="zoom-in-up" data-aos-duration="1000">
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={12} display={'flex'} justifyContent={'center'}>
                            {/* <Box className="slide-middle-content-right-box" data-aos="zoom-in-up" data-aos-duration="1000">
                                <img src="https://d1ra4hr810e003.cloudfront.net/media/3F49D1AC-FD73-43A5-BD0F1309BD801E13/F0132A68-1A68-4625-8107B4BED77FF85B/Tata%20Steel%20TV-_44C3981.jpg" alt="Image Steel VuongPhat" />
                            </Box> */}
                            <Box className='hexagon-container hexagon-first' >
                                <img src="https://pebsteel.com/wp-content/uploads/2022/07/DSCF2061-1024x682.jpeg" alt="Image Steel VuongPhat" />
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} display={'flex'} justifyContent={'center'}>
                            <Box className='hexagon-container hexagon-second'>
                                <img src="https://www.coilsteels.com.au/wp-content/uploads/2023/07/DSC_0018-1024x680.jpg" alt="Image Steel VuongPhat" />
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} display={'flex'} justifyContent={'center'}>
                            <Box className='hexagon-container hexagon-second'>
                                <img src="https://steelandtube.co.nz/sites/default/files/styles/st_product_thumbnail_page/public/product_group/14-Coil.jpg?itok=ArBiWCAd" alt="Image Steel VuongPhat" />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            }
        </Grid>
    );
}

export default SlideMiddleComponent;