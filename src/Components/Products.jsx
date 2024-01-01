import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getListProducts } from "../Services/productService";
import { API_URL } from "../Constants/ApiConstant";
import { ColorRing } from 'react-loader-spinner';
import '../css/products.css'
import Numeral from 'react-numeral';
import { Grid, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Slider from 'react-slick';


function ProductsComponent() {

    const [isLoading, setIsLoading] = useState(true);
    const [listProducts, setListProducts] = useState([]);
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1480,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1039,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    autoplay: true,
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 549,
                settings: {
                    autoplay: true,
                    slidesToShow: 1,
                    dots: true,
                },
            },
        ],
    };

    useEffect(() => {
        getListProducts((res) => {
            setListProducts(res.data);
            setIsLoading(false);
        });
    }, []);

    return (
        <div>
            <div className="products">
                <div
                    className="products-title"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine"
                >
                    <h2>SẢN XUẤT TỈ MỈ</h2>
                    <p>SẢN PHẨM HÀNG ĐẦU</p>
                </div>
            </div>
            {
                isLoading ? <div className={isLoading ? 'active' : 'not-active'}>
                    <Grid display={'flex'} justifyContent={'center'}>
                        <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={['#f0d29c', '#c5a568', '#ccb286', '#d2b789', '#afa999']}
                        />
                    </Grid>
                </div> : 
                <div className="products">
                    <div className="product " data-aos="fade-up" data-aos-duration="1000">
                    <Slider {...settings}>
                        {
                            listProducts.length > 0 && listProducts.map(obj => {
                                return (
                                    <Grid className="product-slide-item">
                                        <Link to={`/product-detail/${obj._id}`} style={{ textDecoration: 'none' }}>
                                            <Grid className="product-item">
                                                <img src={obj.image[0]} alt="product" />
                                            </Grid>
                                            <Grid className="product-content">
                                                <Typography variant="h4">{obj.name}</Typography>
                                                <Typography><Numeral value={obj.price} format={"0,0"} /> VND</Typography>
                                            </Grid>
                                        </Link>
                                    </Grid>
                                )
                            })
                        }
                        </Slider>
                    </div>
                </div>
            }
        </div>

    );
}

export default ProductsComponent;