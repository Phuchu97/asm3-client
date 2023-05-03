import { useNavigate,Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getListCartOrder } from "../Services/OrderService";
import { API_URL } from "../Constants/ApiConstant";
import { Numeral } from "react-numeral";
import '../css/view-order.css'

function ViewOrderComponent() {
  
    const {id} = useParams();
    const [listCartOrder,setListCartOrder] = useState([]);

    useEffect(() => {
        getListCartOrder((res) => {
            console.log(res.data);
            setListCartOrder(res.data)
        }, id)
    },[]);

  return (
    <div className="view-order">
        <div className="head-floor"></div>
        {
            listCartOrder.length > 0 && (
                <div>
                    <div className="view-order-header ">
                        <h1>INFORMATION ORDER</h1>
                        <div className="view-order-information">
                        <p>Full name: {listCartOrder[0].name_order}</p>
                        <p>Phone: 0{listCartOrder[0].phone}</p>
                        <p>Address: {listCartOrder[0].address}</p>
                        <p>Total: <Numeral value={listCartOrder[0].total} format={"0,0"}/> VND</p>
                        </div>
                    </div>
                    <div className="checkout-content row history-content">
                        <table className="history-table">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>NAME PRODUCT</th>
                                    <th>IMAGE</th>
                                    <th>PRICE</th>
                                    <th>COUNT</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    listCartOrder[0].list_cart.length > 0 && listCartOrder[0].list_cart.map((obj,key) => {
                                        return (
                                            <tr key={key} className="view-order-table-tbody-tr">
                                                <td>{key+1}</td>
                                                <td>{obj.name_product}</td>
                                                <td><img className="view-order-img-product" src={API_URL+'/'+obj.image.file_url} alt="" /></td>
                                                <td><Numeral value={obj.price_product} format={"0,0"}/> VND</td>
                                                <td>{obj.quantity}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
    </div>
  );
}

export default ViewOrderComponent;