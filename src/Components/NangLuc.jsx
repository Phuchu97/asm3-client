import React from 'react';
import { motion } from 'framer-motion';
import '../css/nangLuc.css'; // New CSS file

const capabilities = [
    {
        imgSrc: "https://media.gettyimages.com/id/527862796/photo/industrial-worker-in-sheet-metal-component-factory.jpg?s=612x612&w=0&k=20&c=ZLJdQoLA4-jeldih9Hc5Z3nXK5G6VsW_cOi0g0Uw9nU=",
        title: "Nghiêm ngặt về chất lượng",
        description: "Nhà máy của chúng tôi được trang bị máy móc hiện đại, đảm bảo tiến độ sản xuất và chất lượng sản phẩm vượt trội, đáp ứng các tiêu chuẩn quốc tế."
    },
    {
        imgSrc: "https://media.gettyimages.com/id/1057484742/photo/young-happy-worker-and-manager-giving-each-other-manly-greet-at-steel-mill.jpg?s=612x612&w=0&k=20&c=7uuQG4ax1rNc7RluYWIgJpovxS8XbFPlfdSDpxJCd-4=",
        title: "Uy tín và trách nhiệm",
        description: "Chất lượng sản phẩm là ưu tiên hàng đầu. Hệ thống quản lý nghiêm ngặt và đội ngũ chuyên nghiệp luôn sẵn sàng hỗ trợ khách hàng tận tâm."
    },
    {
        imgSrc: "https://media.gettyimages.com/id/1365436662/photo/successful-partnership.jpg?s=612x612&w=0&k=20&c=B1xspe9Q5WMsLc7Hc9clR8MWUL4bsK1MfUdDNVNR2Xg=",
        title: "Giá thành tốt nhất",
        description: "Chúng tôi nỗ lực cung cấp các giải pháp tối ưu về giá cả mà không ảnh hưởng chất lượng. Sự hài lòng của khách hàng là động lực phát triển."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 100 }
    }
};

function NangLucComponent() {
    return (
        <section className="capabilities-section">
            <div className="capabilities-container">
                <motion.div
                    className="capabilities-header"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="capabilities-title">Năng Lực Cốt Lõi</h2>
                    <p className="capabilities-subtitle">Những giá trị làm nên sự khác biệt của chúng tôi</p>
                </motion.div>
                <motion.div
                    className="capabilities-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {capabilities.map((item, index) => (
                        <motion.div className="capability-card" key={index} variants={itemVariants}>
                            <div className="capability-card-image-wrapper">
                                <img src={item.imgSrc} alt={item.title} className="capability-card-image" />
                            </div>
                            <div className="capability-card-content">
                                <h3 className="capability-card-title">{item.title}</h3>
                                <p className="capability-card-description">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default NangLucComponent; 