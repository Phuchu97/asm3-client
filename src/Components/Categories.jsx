import { useEffect, useState } from 'react';
import '../css/categories.css';
import { getFileSlide, getListCategories } from "../Services/HomeService";
import { ColorRing } from 'react-loader-spinner';
import { API_URL } from "../Constants/ApiConstant";

function CategoriesComponent() {
    const[styleBackground,setStyleBackground] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const[listCategories,setListCategories] = useState([]);

    useEffect(() => {
        getFileSlide((res) => {
            if(res.statusCode === 200) {
                setStyleBackground({
                    background: `url(${API_URL+'/'+res.data[0].image.file_url})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                });
                setIsLoading(false);
            } 
        });
        getListCategories((res) => {
            setListCategories(res.data);
            setIsLoading(false);
        })
    },[]);
  
  return (
    <div>
        {
     isLoading? <div className={isLoading? 'active':'not-active'}>
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
        }
    </div>
  );
}

export default CategoriesComponent;