import { useEffect, useState } from 'react';
import '../css/categories.css';
import '../css/responsive.css';
import { getFileSlide, getListCategories } from "../Services/HomeService";
import background from '../assets/images/banner-1.jpg';
import { ColorRing } from 'react-loader-spinner';
import { API_URL } from "../Constants/ApiConstant";

function CategoriesComponent() {
    const [styleBackground, setStyleBackground] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [listCategories, setListCategories] = useState([]);

    useEffect(() => {
        // getFileSlide((res) => {
        //     if (res.statusCode === 200) {
        //         setStyleBackground({});
        //         setIsLoading(false);
        //     }
        // });
        // Hiện tại ảnh đang để tĩnh, vẫn chưa động thay thế trên admin

        getListCategories((res) => {
            setListCategories(res.data);
            setIsLoading(false);
        });
    }, []);

    return (
        <div>
            <div className="categories">
                    <div 
                        className="home-header-page" 
                        style={{
                            backgroundImage: `url(${background})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }}
                    >
                        <video
                            className='home-header-page-video'
                            autoPlay
                            loop
                            muted
                            poster={require('../assets/images/banner-3.mp4')}
                            playsInline
                        >
                            <source
                                src={require('../assets/images/banner-3.mp4')}
                                type="video/mp4"
                            />
                        </video>
                        <div className="eewPUi"></div>
                        <div className="home-page-title">
                            <div data-aos="fade-up" data-aos-duration="1000">
                                <h2>VUONGPHATSTEEL</h2>
                                <p>PHỤC VỤ TẬN TÂM - CHẤT LƯỢNG HÀNG ĐẦU</p>
                            </div>
                        </div>
                        <div className="down-animation"><i class="fa-solid fa-angle-down"></i></div>
                    </div>
                    <div className="categories-title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>SẢN PHẨM VƯỢT TRỘI VỀ CHẤT LƯỢNG</h2>
                        <p>CHÚNG TÔI THẾ MẠNH TRONG CÁC LĨNH VỰC</p>
                    </div>
                    <div className="category row" data-aos="fade-up" data-aos-duration="2000">
                        {
                            listCategories.length > 0 && listCategories.map((obj, key) => {
                                return (
                                    <div key={key} className="col-xs-12 col-sm-12 col-md-3 col-lg-3 mt-4 category-child">
                                        <div className="category-item">
                                            <img src={obj.image} alt="" />
                                        </div>
                                        <div className="category-item-title">{obj.name}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
        </div>
    );
}

export default CategoriesComponent;