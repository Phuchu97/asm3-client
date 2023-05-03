import { useNavigate,Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getListProducts } from "../Services/productService";
import { API_URL } from "../Constants/ApiConstant";
import '../css/products.css'
import Numeral from 'react-numeral';


function ProductsComponent() {
  
    const[listProducts,setListProducts] = useState([]);
    
    useEffect(() => {
        getListProducts((res) => {
            setListProducts(res.data);
        })
    }, [])

  return (
    <div className="products">
        <div className="products-title">
            <h2>MADE THE HARD WAY</h2>
            <p>TOP TRENDING PRODUCTS</p>
        </div>
        <div className="product row">
            {
                listProducts.length > 0 && listProducts.map(obj => {
                    return (
                        <div className="col-3 mt-4">
                            <Link to={`/home/product-detail/${obj._id}`} style={{textDecoration: 'none'}}>
                                <div className="product-item">
                                    <img src={API_URL+'/'+obj.image[0].file_url} alt="product" />
                                </div>
                                <div className="product-content">
                                    <h4>{obj.name}</h4>
                                    <p><Numeral value={obj.price} format={"0,0"}/> VND</p>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    </div>
  );
}

export default ProductsComponent;