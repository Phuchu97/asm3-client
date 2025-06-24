import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { getListProductDetail, getListProductRelated } from "../Services/productService";
import { ColorRing } from 'react-loader-spinner';
import { CartContext } from "../Contexts/CartContext";
import { motion } from 'framer-motion';
import Numeral from 'react-numeral';
import '../css/product-detail.css';

function ProductDetailComponent() {
  const navigate = useNavigate();
  const { handleGetListCart } = useContext(CartContext);
  const userId = localStorage.getItem('userId');
  const { id } = useParams();
  const [quantity, setQuantity] = useState(0);
  const [imgUrl, setImgUrl] = useState('');
  const [product, setProduct] = useState(null);
  const [productRelated, setProductRelated] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
  }, [id]);

  const handleAddCart = () => {
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
      // addToCart((rs) => {
      //   if (rs.statusCode === 200) {
      //     toast.success("Thêm vào giỏ hàng thành công!", {
      //       className: 'toast-message'
      //     });
      //     handleGetListCart();
      //   } else {
      //     toast.error("Có lỗi trong quá trình xử lý!");
      //   }
      // }, data)
    }
  }

  return (
    <div className="product-detail-industrial">
      {isLoading ? (
        <div className="product-detail-loading">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#1576a9', '#0d3c5e', '#b0c4d9', '#d2e3f7', '#e0eaf6']}
          />
        </div>
      ) : product && (
        <motion.div className="product-detail-main" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="product-detail-content">
            <motion.div className="product-detail-gallery" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <img className="product-detail-img-main" src={imgUrl === '' ? product.image[0] : imgUrl} alt={product.name} />
              <div className="product-detail-gallery-list">
                {product.image.map((img, idx) => (
                  <motion.img
                    key={idx}
                    src={img}
                    alt={product.name + idx}
                    className={imgUrl === img || (imgUrl === '' && idx === 0) ? 'active' : ''}
                    whileHover={{ scale: 1.08, boxShadow: '0 4px 16px #1576a955' }}
                    onClick={() => setImgUrl(img)}
                  />
                ))}
              </div>
            </motion.div>
            <motion.div className="product-detail-info" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="product-detail-title">{product.name}</h2>
              <div className="product-detail-price">
                {product.price > 1000 ? <span><Numeral value={product.price} format={"0,0"} /> VND</span> : <span>Liên hệ để nhận báo giá</span>}
              </div>
              <div className="product-detail-category">Loại sản phẩm: <span>{product.category_product}</span></div>
              <div className="product-detail-desc">{product.description_sale}</div>
              <div className="product-detail-actions">
                <input
                  className="product-detail-quantity"
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={e => setQuantity(Math.max(1, Number(e.target.value)))}
                  placeholder="Số lượng"
                />
                <button className="product-detail-addcart" onClick={handleAddCart}>Thêm vào giỏ hàng</button>
                <Link to="https://zalo.me/0967870722" target="_blank" rel="noopener noreferrer">
                  <button className="product-detail-contact">Liên hệ ngay</button>
                </Link>
              </div>
            </motion.div>
          </div>
          <motion.div className="product-detail-description" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h3>Mô tả sản phẩm</h3>
            <p>{product.description_detail}</p>
          </motion.div>
          <motion.div className="product-detail-related" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h3>Sản phẩm liên quan</h3>
            <div className="product-detail-related-list">
              {productRelated.length > 0 ? productRelated.map(obj => (
                <motion.div className="product-detail-related-card" key={obj._id} whileHover={{ scale: 1.04, boxShadow: '0 8px 32px #1576a955' }} onClick={() => navigate(`/product-detail/${obj._id}`)}>
                  <img src={obj.image[0]} alt={obj.name} />
                  <div className="product-detail-related-title">{obj.name}</div>
                  <div className="product-detail-related-price">
                    {obj.price > 1000 ? <span><Numeral value={obj.price} format={"0,0"} /> VND</span> : <span>Liên hệ</span>}
                  </div>
                </motion.div>
              )) : <div className="product-detail-related-empty">Không có sản phẩm liên quan.</div>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default ProductDetailComponent;