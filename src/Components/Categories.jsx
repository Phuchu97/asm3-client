import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../css/categories.css';
import '../css/responsive.css';
import { getListCategories } from "../Services/HomeService";
import backgroundVideo from '../assets/images/banner-3.mp4';
import { Box, Button, Grid } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import { ColorRing } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

function CategoriesComponent() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true);
    const [listCategories, setListCategories] = useState([]);
    const [visibleCategories, setVisibleCategories] = useState(3);

    useEffect(() => {
        getListCategories((res) => {
            setListCategories(res.data);
            setIsLoading(false);
        });
    }, []);
    console.log(listCategories);
    const handleViewMore = () => {
        setVisibleCategories((prev) => prev + 3);
    };

    return (
        <div className="categories-industrial">
            {/* Banner with video background */}
            <div className="categories-banner homepage-banner-steel">
                <video autoPlay loop muted playsInline className="banner-video">
                    <source src={backgroundVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="categories-banner-overlay homepage-banner-steel-overlay"></div>
                <div className="categories-banner-content homepage-banner-center">
                    <h1 className="homepage-banner-title">VƯỢNG PHÁT STEEL</h1>
                    <p className="homepage-banner-slogan">Giải pháp thép công nghiệp hiện đại & bền vững</p>
                    <button className="categories-banner-btn homepage-banner-btn" onClick={() => navigate('/about-us')}>Khám phá về chúng tôi</button>
                </div>
            </div>
            {/* Danh mục sản phẩm */}
            <motion.div className="categories-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <h2 className="categories-title">Danh mục sản phẩm</h2>
                <div className="categories-grid categories-grid-steel">
                    {isLoading ? (
                        <div className="categories-loading">Đang tải...</div>
                    ) : (
                        listCategories.length > 0 ? listCategories.map((obj, key) => (
                            <motion.div
                                className="category-card category-card-steel"
                                key={key}
                                whileHover={{ scale: 1.09, boxShadow: '0 16px 48px #1576a999' }}
                                onClick={() => navigate(`/product-list?category_id=${obj._id}`)}
                            >
                                <div className="category-card-img-wrap category-card-img-steel">
                                    <img src={obj.image} alt={obj.name} className="category-card-img-large category-card-img-steel-img" />
                                    <div className="category-card-icon-overlay"><i className="fa-solid fa-industry"></i></div>
                                </div>
                                <div className="category-card-title-large category-card-title-steel">{obj.name}</div>
                                <div className="category-card-caption">Chất lượng - Bền vững - Hiện đại</div>
                            </motion.div>
                        )) : <div className="categories-empty">Chưa có danh mục sản phẩm.</div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}

export default CategoriesComponent;