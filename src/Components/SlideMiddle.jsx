import { useEffect, useState } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material'
import '../css/slidemiddle.css';
import EastIcon from '@mui/icons-material/East';
import { ColorRing } from 'react-loader-spinner';
import { getListSlideMiddle } from '../Services/SlideMiddle';

function SlideMiddleComponent() {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getListSlideMiddle((rs) => {
            console.log(rs);
            if(rs.statusCode === 200) {
                setData(rs.data);
                setIsLoading(false);
            }
        })
    }, []);

    return (
        <Grid>
            {isLoading? <Grid height={700} display={'flex'} alignItems={'center'} justifyContent={'center'}>
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
                            <Typography variant='h2'>{data[0].name}</Typography>
                            <Box padding={'0 1.4rem'} style={{ textAlign: 'justify' }}>
                                <Typography variant='p' >{data[0].description}</Typography>
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
                            <Box className='hexagon-container hexagon-first' >
                                <img src={data[0].image[0]} alt="Image Steel VuongPhat" />
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} display={'flex'} justifyContent={'center'}>
                            <Box className='hexagon-container hexagon-second'>
                                <img src={data[0].image[1]} alt="Image Steel VuongPhat" />
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} display={'flex'} justifyContent={'center'}>
                            <Box className='hexagon-container hexagon-second'>
                                <img src={data[0].image[2]} alt="Image Steel VuongPhat" />
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