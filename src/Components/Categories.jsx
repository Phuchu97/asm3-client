import { useEffect, useState } from 'react';
import '../css/categories.css';
import '../css/responsive.css';
import { getFileSlide, getListCategories } from "../Services/HomeService";
import { ColorRing } from 'react-loader-spinner';
import { API_URL } from "../Constants/ApiConstant";

function CategoriesComponent() {
    const [styleBackground, setStyleBackground] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [listCategories, setListCategories] = useState([]);
    const videoUrl = "https://firebasestorage.googleapis.com/v0/b/funix-chat.appspot.com/o/images%2Fbanner-3.mp429716014-be70-4ba0-94b9-20d501b661ec?alt=media&token=d36f1917-2fd1-41b9-9d93-b72c2b7b585e"

    useEffect(() => {
        // getFileSlide((res) => {
        //     if (res.statusCode === 200) {
        //         console.log(res.data[0]);
        //         setStyleBackground(res.data[0].image)
        //         // setStyleBackground({
        //         //     background: `url(${res.data[0].image})`,
        //         //     backgroundRepeat: 'no-repeat',
        //         //     backgroundPosition: 'center',
        //         //     backgroundSize: 'cover'
        //         // });
        //         setIsLoading(false);
        //     }
        // });
        getListCategories((res) => {
            setListCategories(res.data);
            setIsLoading(false);
        })
    }, []);

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
                </div> : <div className="categories">
                    <div className="home-header-page">
                        <video
                            className='home-header-page-video'
                            autoPlay
                            loop
                            muted
                            poster={videoUrl}

                        >
                            <source
                                src={videoUrl}
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
            }
        </div>
    );
}

export default CategoriesComponent;