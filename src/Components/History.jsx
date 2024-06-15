import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getListOrder } from "../Services/OrderService";
import '../css/history.css'
import { Numeral } from "react-numeral";

function HistoryComponent() {

    const navigate = useNavigate();
    const userId = localStorage.getItem('userId');
    const[orders,setOrders] = useState([]);
    const moveToView = (id) => {
        navigate(`/home/view-order/${id}`)
    }

    useEffect(() => {
        getListOrder((res) => {
            setOrders(res.data);
        }, userId)
    },[])
  
  return (
    <div className="checkout">
        <div className="head-floor"></div>
        <div className="checkout-header ">
            <h1 className="checkout-header-title">HISTORY</h1>
            <p>Please check your history, if it has something wrong please reply now!</p>
        </div>
        <div className="checkout-content row history-content">
            <table className="history-table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>NAME</th>
                        <th>PHONE</th>
                        <th>ADDRESS</th>
                        <th>TOTAL</th>
                        <th>DELIVERY</th>
                        <th>STATUS</th>
                        <th>DETAIL</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.length > 0 && orders.map((obj,key) => {
                            return (
                                <tr key={key}>
                                    <td>{key+1}</td>
                                    <td>{obj.name_order}</td>
                                    <td>0{obj.phone}</td>
                                    <td>{obj.address}</td>
                                    <td><Numeral value={obj.total} format={"0,0"}/></td>
                                    <td>{obj.delivery === 0? 'Đang nhập kho vận':'Đang vận chuyển'}</td>
                                    <td>{obj.status === 0? 'Thanh toán khi nhận hàng' : 'Đã thanh toán'}</td>
                                    <td><div onClick={() => moveToView(obj._id)} className="history-move-view">View<i className="fa-solid fa-right-long"></i></div></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  );
}

export default HistoryComponent;