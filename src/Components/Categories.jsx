import { useNavigate,Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import '../css/categories.css';
import { getFileSlide, getListCategories } from "../Services/HomeService";
import { API_URL } from "../Constants/ApiConstant";

function CategoriesComponent() {

    const[styleBackground,setStyleBackground] = useState(null);
    const[listCategories,setListCategories] = useState([]);

    useEffect(() => {
        getFileSlide((res) => {
            setStyleBackground({
                background: `url(${API_URL+'/'+res.data[0].image.file_url})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            });
        });
        getListCategories((res) => {
            console.log(res.data);
            setListCategories(res.data)
        })
    },[])
  
  return (
    <div className="categories">
        <div className="home-header-page" style={styleBackground}>
            <div className="eewPUi"></div>
            <div className="home-page-title">
            <div>
                <h2>PHUMAI</h2>
                <p>THE BEST CHOICE FOR YOU</p>
            </div>
            </div>
            <div className="down-animation"><i class="fa-solid fa-angle-down"></i></div>
        </div>
        <div className="categories-title">
            <h2>CAREFULLY CREATED CONLLECTIONS</h2>
            <p>BROWSE OUR CATEGORIES</p>
        </div>
        <div className="category row">
            {
                listCategories.length > 0 && listCategories.map((obj, key) => {
                    return (
                        <div key={key} className="col-6 mt-4">
                            <div className="category-item">
                                <img src={API_URL+'/'+obj.image.file_url} alt="" />
                                <div className="category-item-title">{obj.name}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  );
}

export default CategoriesComponent;