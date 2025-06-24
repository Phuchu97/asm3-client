import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getListProducts } from "../Services/productService";
import { motion } from 'framer-motion';
import '../css/products.css';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 100 }
    }
};

function ProductsComponent() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    // Fetch 6 products for the new layout
    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        getListProducts((res) => {
            if (res && res.data) {
                setListProducts(res.data.slice(0, 6));
            }
            setIsLoading(false);
        });
    }, []);

    const handleViewProduct = (id) => {
        navigate(`/product-detail/${id}`);
    };

    const handleViewMore = () => {
        navigate('/product-list');
    };

    if (isLoading) {
        return <div className="products-loading-placeholder" />;
    }

    return (
        <section className="products-section-v2">
            <motion.div
                className="products-container-v2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <motion.div className="products-header-v2" variants={itemVariants}>
                    <p className="products-subtitle-v2">Sản phẩm của chúng tôi</p>
                    <h2 className="products-title-v2">Chất Lượng Tạo Nên Thương Hiệu</h2>
                    <p className="products-description-v2">
                        Chúng tôi tự hào cung cấp các sản phẩm thép chất lượng cao, đáp ứng mọi tiêu chuẩn khắt khe nhất của ngành công nghiệp.
                    </p>
                    <button className="products-view-all-btn-v2" onClick={handleViewMore}>
                        <span>Xem tất cả</span>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </motion.div>

                {listProducts.map(product => (
                    <motion.div
                        key={product._id}
                        className="product-card-v3"
                        variants={itemVariants}
                        onClick={() => handleViewProduct(product._id)}
                    >
                        <div className="product-image-frame-v3">
                            <img src={product.image[0]} alt={product.name} className="product-image-v3" />
                        </div>
                        <div className="product-info-v3">
                            <h3 className="product-name-v3">{product.name}</h3>
                            <p className="product-desc-v3">Chất lượng cao</p>
                        </div>
                        <div className="product-arrow-icon-v3">
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default ProductsComponent;