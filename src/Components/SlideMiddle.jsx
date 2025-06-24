import { useEffect, useState } from 'react';
import '../css/slidemiddle.css';
import { getListSlideMiddle } from '../Services/SlideMiddle';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function SlideMiddleComponent() {
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            getListSlideMiddle((rs) => {
                if (rs && rs.statusCode === 200 && rs.data && rs.data.length > 0) {
                    setData(rs.data[0]);
                }
                setIsLoading(false);
            });
        }, 500); // Small delay to prevent flash of loading
        return () => clearTimeout(timer);
    }, []);

    const textVariants = {
        offscreen: { opacity: 0, x: -50 },
        onscreen: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 100, duration: 0.8 }
        }
    };

    const imageVariants = {
        offscreen: { opacity: 0, scale: 0.9 },
        onscreen: {
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 100, duration: 0.8 }
        }
    };

    if (isLoading) {
        return <div className="slide-middle-loading-placeholder" />;
    }

    if (!data || !data.image || data.image.length < 3) {
        return null; // Don't render if data is missing or doesn't have 3 images
    }

    return (
        <section className="sm-section">
            <div className="sm-container">
                <motion.div
                    className="sm-content-wrapper"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={textVariants}
                >
                    <h2 className="sm-title">{data.name}</h2>
                    <p className="sm-description">{data.description}</p>
                    <button onClick={() => navigate("/about-us")} className="sm-cta-button">
                        Tìm Hiểu Thêm
                    </button>
                </motion.div>
                <motion.div
                    className="sm-image-wrapper"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={imageVariants}
                >
                    <div className="sm-gallery">
                        <img src={data.image[0]} alt="Steel product 1" className="sm-gallery-image-1" />
                        <img src={data.image[1]} alt="Steel product 2" className="sm-gallery-image-2" />
                        <img src={data.image[2]} alt="Steel product 3" className="sm-gallery-image-3" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default SlideMiddleComponent;