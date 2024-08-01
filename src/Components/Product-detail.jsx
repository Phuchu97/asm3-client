import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { getListProductDetail, getListProductRelated } from "../Services/productService";
import { Button } from "@mui/material";
import { addToCart } from "../Services/CartService";
import { ColorRing } from 'react-loader-spinner';
import { CartContext } from "../Contexts/CartContext";
import Slider from "react-slick";
import { Grid } from "@mui/material";
import Numeral from 'react-numeral';
import '../css/home.css';
import '../css/product-detail.css';

function ProductDetailComponent(props) {

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const { handleGetListCart } = useContext(CartContext);
  const userId = localStorage.getItem('userId')
  const { id } = useParams();
  const [quantity, setQuantity] = useState(0);
  const [imgUrl, setImgUrl] = useState('');
  const [product, setProduct] = useState(null);
  const [productRelated, setProductRelated] = useState([]);
  var settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1039,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 549,
        settings: {
          slidesToShow: 2,
        },
      }
    ],
  };
  const handleImg = (e) => {
    setImgUrl(e.target.currentSrc);
  }

  const handleAddCart = (e) => {
    if (quantity > 0) {
      let data = {
        name_product: product.name,
        product_id: product._id,
        category_product_name: product.category_product,
        category_id: product.category_id,
        price_product: product.price,
        quantity: Number(quantity),
        file_image: product.image[0],
        user_id: userId,
      }
      addToCart((rs) => {
        if (rs.statusCode === 200) {
          toast.success("Thêm vào giỏ hàng thành công!", {
            className: 'toast-message'
          });
          handleGetListCart();
        } else {
          toast.error("Có lỗi trong quá trình xử lý!");
        }
      }, data)
    }
  }

  useEffect(() => {
    getListProductDetail((res) => {
      if (res.statusCode === 200) {
        setProduct(res.data);
        getListProductRelated((rs) => {
          const result = rs.data.filter(obj => obj._id !== res.data._id);
          setProductRelated(result)
        }, { id: res.data.category_id });
        setIsLoading(false);
      }
    }, { id })
  }, [id])


  return (
    <div>
      {
        isLoading ? <div className={isLoading ? 'active' : 'not-active'}>
          <div className="loading">
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          </div>
        </div> : <div className="product-detail home">
          <div className="head-floor"></div>
          <div className="container">
            <div className="product-detail-content row">
              <div className="col-lg-6 col-md-6 col-sm-12 product-detail-content-left">
                {
                  product !== null && product.image.length > 0 && (
                    <img src={imgUrl === '' ? product.image[0] : imgUrl} alt="sss" />
                  )
                }
                <Grid className="product-detail-slide">
                  <Slider {...settings} >
                    <img onMouseMove={handleImg} src={product.image[0]} />
                    <img onMouseMove={handleImg} src={product.image[1]} />
                    <img onMouseMove={handleImg} src={product.image[2]} />
                    <img onMouseMove={handleImg} src={product.image[3]} />
                    <img onMouseMove={handleImg} src={product.image[4]} />
                  </Slider>
                </Grid>
              </div>
              {
                product !== null && (
                  <div className="col-lg-6 col-md-6 col-sm-12 product-detail-content-right">
                    <h3 className="product-name">{product.name}</h3>
                    <Link to={"https://zalo.me/0967870722"}>
                      <Button className="attention-button" style={{ fontSize: '16px', padding: '6px 10px', margin: "16px 0", color: '#bea662', backgroundColor: 'rgb(28 103 72)' }}>
                        Liên hệ
                      </Button>
                    </Link>
                    <p className="product-description">{product.description_sale}</p>
                    <h3 className="product-category">Loại sản phẩm: <span className="product-category-item">{product.category_product}</span></h3>
                    <div className="product-cart">
                      <p className="product-cart-name">Số lượng</p>
                      <input
                        className="product-cart-input"
                        onChange={(e) => e.target.value < 0 ? setQuantity(0) : setQuantity(e.target.value)}
                        id="product-cart-input" type="number"
                        value={quantity}
                      />
                      <div className="product-cart-add"></div>
                      <div className="product-cart-add-button" onClick={handleAddCart}>Thêm vào giỏ hàng</div>
                    </div>
                  </div>
                )
              }
            </div>
            {
              product !== null && (
                <div className="description row">
                  <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12">
                    <div className="description-title">
                      <Link to={"https://zalo.me/0967870722"}>
                        <Button style={{ fontSize: '14px', color: 'white' }}>
                          Liên hệ ngay với chúng tôi qua SĐT/Zalo: 0967870722
                        </Button>
                      </Link>
                    </div>
                    <h3 className="description-path">Mô tả sản phẩm</h3>
                    <p className="description-content">{product.description_detail}</p>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="description-relate">
                      <h3 className="description-path">Các sản phẩm liên quan</h3>
                      <div className="description-relate-product row">
                        {
                          productRelated.length > 0 && productRelated.map((obj, key) => {
                            return (
                              <div onClick={() => navigate(`/product-detail/${obj._id}`)} key={key} className="col-lg-3 col-md-4 col-sm-6 col-xs-6 mt-4">
                                <div className="product-item">
                                  <img src={obj.image[0]} alt="" />
                                </div>
                                <div className="product-content" style={{textAlign: 'center'}}>
                                  <h4>{obj.name}</h4>
                                  <Link to={"https://zalo.me/0967870722"}>
                                    <Button className="attention-button" style={{ fontSize: '16px', padding: '6px 10px', margin: "16px 0", color: '#bea662', backgroundColor: 'rgb(28 103 72)' }}>
                                      Liên hệ
                                    </Button>
                                  </Link>
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      }
    </div>

  );
}

export default ProductDetailComponent;