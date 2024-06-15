import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { getListProductDetail,getListProductRelated } from "../Services/productService";
import { addToCart } from "../Services/CartService";
import { ColorRing } from 'react-loader-spinner';
import { CartContext } from "../Contexts/CartContext";
import Numeral from 'react-numeral';
import '../css/home.css';
import '../css/product-detail.css';

function ProductDetailComponent(props) {

  const navigate = useNavigate();
  const [isLoading,setIsLoading] = useState(true);
  const {handleGetListCart} = useContext(CartContext);
  const userId = localStorage.getItem('userId')
  const { id } = useParams();
  const[quantity, setQuantity] = useState(0);
  const[imgUrl, setImgUrl] = useState('');
  const[product, setProduct] = useState(null);
  const[productRelated, setProductRelated] = useState([]);
  
  const handleImg = (e) => {
    setImgUrl(e.target.currentSrc);
  }

  const handleAddCart = (e) => {
    if(quantity > 0) {
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
        if(rs.statusCode === 200) {
          toast.success("Thêm vào giỏ hàng thành công!",{
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
      if(res.statusCode === 200) {
        setProduct(res.data);
        getListProductRelated((rs) => {
          const result = rs.data.filter(obj => obj._id !== res.data._id);
          setProductRelated(result)
        }, {id: res.data.category_id});
        setIsLoading(false);
      }
    }, {id})
  }, [])
  
  
  return (
    <div>
      {
     isLoading? <div className={isLoading? 'active':'not-active'}>
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
        <div className="product-detail-content row">
            <div className="col-6 product-detail-content-left">
              <div className="img-child">
                {
                  product !== null && product.image.length>0 && (
                    product.image.map((item, key) => {
                      return <img key={key} onMouseMove={handleImg} src={item} alt="aaa" />
                    })
                    )
                  }
              </div>
              {
                product !== null && product.image.length>0 && (
                  <img src={imgUrl === ''? product.image[0] : imgUrl} alt="sss" />
                )
              }
              
            </div>
            {
              product !== null && (
                <div className="col-6 product-detail-content-right">
                    <h3 className="product-name">{product.name}</h3>
                    <h6 className="product-price"><Numeral value={product.price} format={"0,0"}/> VND</h6>
                    <p className="product-description">{product.description_sale}</p>
                    <h3 className="product-category">CATEGORY: <span className="product-category-item">{product.category_product}</span></h3>
                    <div className="product-cart">
                      <p className="product-cart-name">QUANTITY</p>
                      <input 
                        className="product-cart-input" 
                        onChange={(e) => e.target.value < 0? setQuantity(0):setQuantity(e.target.value)} 
                        id="product-cart-input" type="number" 
                        value={quantity} 
                      />
                      <div className="product-cart-add"></div>
                      <div className="product-cart-add-button" onClick={handleAddCart}>Add to cart</div>
                    </div>
                </div>
              )
            }
        </div>
        {
          product !== null && (
            <div className="description">
              <div className="description-title">Description</div>
              <h3 className="description-path">PRODUCT DESCRIPTION</h3>
              <p className="description-content">{product.description_detail}</p>
              <div className="description-relate">
                <h3 className="description-path">RELATED PRODUCTS</h3>
                <div className="description-relate-product row">
                  {
                    productRelated.length > 0 && productRelated.map((obj,key) => {
                      return (
                        <div key={key} className="col-2 mt-4">
                            <div className="product-item">
                                <img src={obj.image[0]} alt="" />
                            </div>
                            <div className="product-content">
                                <h4>{obj.name}</h4>
                                <p><Numeral value={obj.price} format={"0,0"}/> VND</p>
                            </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          )
        }
    </div>
    }
    </div>
    
  );
}

export default ProductDetailComponent;