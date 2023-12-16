import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getListProducts } from "../Services/productService";
import { API_URL } from "../Constants/ApiConstant";
import { ColorRing } from 'react-loader-spinner';
import '../css/products.css'
import Numeral from 'react-numeral';
import { Grid } from "@mui/material";


function ProductsComponent() {

    const [isLoading, setIsLoading] = useState(true);
    const [listProducts, setListProducts] = useState([]);

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
                    </div> : <div className="products">
                        <div className="product row" data-aos="fade-up" data-aos-duration="1000">
                            {
                                listProducts.length > 0 && listProducts.map(obj => {
                                    return (
                                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 mt-4">
                                            <Link to={`/product-detail/${obj._id}`} style={{ textDecoration: 'none' }}>
                                                <div className="product-item">
                                                    <img src={obj.image[0]} alt="product" />
                                                </div>
                                                <div className="product-content">
                                                    <h4>{obj.name}</h4>
                                                    <p><Numeral value={obj.price} format={"0,0"} /> VND</p>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                }
            </div>

            );
}

            export default ProductsComponent;