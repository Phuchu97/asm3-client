import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getListProducts } from "../Services/productService";
import { ColorRing } from 'react-loader-spinner';
import '../css/productListPage.css';
import { motion } from 'framer-motion';
import Numeral from 'react-numeral';

function ListProductComponent() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        getListProducts((res) => {
            setListProducts(res.data);
            setIsLoading(false);
        });
    }, []);

    const filteredProducts = listProducts.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="product-list-industrial">
            <motion.div className="product-list-header"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <h1>Sản phẩm</h1>
                <p>Thép cuộn, dây đai thép, bọ thép đóng gói chất lượng cao</p>
                <input
                    className="product-list-search"
                    type="text"
                    placeholder="Tìm kiếm sản phẩm..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </motion.div>
            {isLoading ? (
                <div className="product-list-loading">
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
            ) : (
                <motion.div className="product-list-grid"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } }
                    }}
                >
                    {filteredProducts.length > 0 ? filteredProducts.map(obj => (
                        <motion.div className="product-list-card" key={obj._id}
                            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
                            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px #1576a955' }}
                        >
                            <Link to={`/product-detail/${obj._id}`} className="product-list-link">
                                <img src={obj.image[0]} alt={obj.name} className="product-list-img" />
                                <div className="product-list-title">{obj.name}</div>
                            </Link>
                            <div className="product-list-price">
                                {obj.price > 1000 ? (
                                    <span><Numeral value={obj.price} format={"0,0"} /> VND</span>
                                ) : (
                                    <Link to="https://zalo.me/0967870722" target="_blank" rel="noopener noreferrer">
                                        <button className="product-list-contact-btn">Liên hệ</button>
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    )) : (
                        <div className="product-list-empty">Không tìm thấy sản phẩm phù hợp.</div>
                    )}
                </motion.div>
            )}
        </div>
    );
}

export default ListProductComponent;