import React from 'react';
import '../css/doiTac.css'; // We will create this new CSS file
import { motion } from 'framer-motion';

// Import partner logos
import logoHoaPhat from '../assets/images/hoaphat.jpg';
import logoVinapipe from '../assets/images/vinapipe.jpg';
import logoTisco from '../assets/images/tisco.png';
import logoTuyenQuang from '../assets/images/tuyenquang.jpg';
import logoVietY from '../assets/images/viety.png';
import logoVnsteel from '../assets/images/vnsteel.png';
import logoVietsing from '../assets/images/vietsing.png';

const partnerLogos = [
    { id: 1, src: logoHoaPhat, alt: 'Hoa Phat Group' },
    { id: 2, src: logoVinapipe, alt: 'Vinapipe' },
    { id: 3, src: logoTisco, alt: 'Tisco' },
    { id: 4, src: logoTuyenQuang, alt: 'Tuyen Quang Steel' },
    { id: 5, src: logoVietY, alt: 'Viet Y Steel' },
    { id: 6, src: logoVnsteel, alt: 'VNSteel' },
    { id: 7, src: logoVietsing, alt: 'Vietsing Steel' },
];

// Duplicate logos for a seamless loop effect
const duplicatedLogos = [...partnerLogos, ...partnerLogos];

function DoiTacComponent() {
    return (
        <section className="partners-section">
            <div className="partners-container">
                <h2 className="partners-title">Đối Tác Tin Cậy Của Chúng Tôi</h2>
                <div className="logo-scroller">
                    <div className="logo-track">
                        {duplicatedLogos.map((logo, index) => (
                            <div className="partner-logo" key={index}>
                                <img src={logo.src} alt={logo.alt} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DoiTacComponent; 