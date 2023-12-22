import { useEffect, useState } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material'
import '../css/slidePartner.css';
import { ColorRing } from 'react-loader-spinner';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

function SlidePartnerComponent() {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
            </Grid> : <Grid container className='slide-partner' style={{ background: '#e6dac23d', marginTop: '42px' }} >
                <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingTop: '45px' }} className="slide-partner-content"  data-aos="zoom-in-up" data-aos-duration="1000">
                    <Box sx={{marginBottom: '5rem'}} display={'flex'} alignItems={'center'} justifyContent={'center'} className='slide-partner-title'>
                        <Typography
                            variant='h3' color={'rgb(121 103 50 / 84%)'}
                            style={{
                                fontStyle: "normal",
                                fontWeight: 600,
                                letterSpacing: "0.5rem",
                                fontSize: '2.5rem',
                            }}
                        >
                            NĂNG LỰC
                        </Typography>
                    </Box>
                    <Grid container className='slide-partner-energy'>
                        <Grid item xs={12} sm={4} md={4} lg={4} sx={{padding: '0 15px', marginBottom: '2rem'}}>
                            <Card sx={{ width: '100%' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image="https://media.gettyimages.com/id/527862796/photo/industrial-worker-in-sheet-metal-component-factory.jpg?s=612x612&w=0&k=20&c=ZLJdQoLA4-jeldih9Hc5Z3nXK5G6VsW_cOi0g0Uw9nU="
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Nghiêm ngặt về chất lượng
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary">
                                            Chúng tôi sử dụng các công nghệ và máy móc hiện đại để kiểm tra chất lượng đầu vào và đầu ra của sản phẩm
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    
                        <Grid item xs={12} sm={4} md={4} lg={4} sx={{padding: '0 15px', marginBottom: '2rem'}}>
                            <Card sx={{ width: '100%' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image="https://media.gettyimages.com/id/1057484742/photo/young-happy-worker-and-manager-giving-each-other-manly-greet-at-steel-mill.jpg?s=612x612&w=0&k=20&c=7uuQG4ax1rNc7RluYWIgJpovxS8XbFPlfdSDpxJCd-4="
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Uy tín và trách nhiệm
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={4} md={4} lg={4} sx={{padding: '0 15px', marginBottom: '2rem'}}>
                            <Card sx={{ width: '100%' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image="https://media.gettyimages.com/id/1365436662/photo/successful-partnership.jpg?s=612x612&w=0&k=20&c=B1xspe9Q5WMsLc7Hc9clR8MWUL4bsK1MfUdDNVNR2Xg="
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Giá thành tốt nhất
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} className="slide-partner-content"  data-aos="zoom-in-up" data-aos-duration="1000">
                    <Box sx={{marginTop: '3rem'}} display={'flex'} alignItems={'center'} justifyContent={'center'} className='slide-partner-title'>
                        <Typography
                            variant='h3' color={'rgb(121 103 50 / 84%)'}
                            style={{
                                fontStyle: "normal",
                                fontWeight: 600,
                                letterSpacing: "0.5rem",
                                fontSize: '2.5rem',
                            }}
                        >
                            ĐỐI TÁC
                        </Typography>
                    </Box>
                    <Box height={'10rem'}></Box>
                </Grid>
            </Grid>
            }
        </Grid>
    );
}

export default SlidePartnerComponent;