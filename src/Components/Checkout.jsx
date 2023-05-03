import { useNavigate,Link,useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getListCart, deleteListCart } from "../Services/CartService";
import { addOrder } from "../Services/OrderService";
import { Numeral } from "react-numeral";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../css/checkout.css'

function CheckoutComponent() {

    const userId = localStorage.getItem('userId');
    const phoneRegExp = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/
    const[listOrder, setListOrder] = useState([]);
    const[total, setTotal] = useState(0);
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            address: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().min(6,'Tối thiểu 6 ký tự').required('Trường này là băt buộc!'),
            email: Yup
            .string()
            .min(6,'Tối thiểu 6 ký tự')
            .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'Bạn chưa nhập đúng định dạng email!')
            .required('Trường này là băt buộc!'),
            phone: Yup
            .string()
            .matches(phoneRegExp,'Bạn chưa nhập đúng số điện thoại!')
            .required('Trường này là băt buộc!'),
            address: Yup
            .string()
            .min(6,'Tối thiểu 6 ký tự')
            .max(100,'Tối đa 100 ký tự')
            .required('Trường này là băt buộc!'),
        }),
        onSubmit: (values) => {
            let data = {
                list_cart: listOrder,
                user_id: userId,
                total: total,
                name_order: values.name,
                phone: values.phone,
                address: values.address,
                email: values.email
            }
            addOrder((res) => {
                console.log(res);
            }, data)
        },
    })

    const handleGetCart = () => {
        getListCart((res) => {
            setListOrder(res.data);
            setTotal(res.data.reduce((total,cur) => total + cur.price_product*cur.quantity,0));
        },userId)
    }

    const handleDeleteCart = (id) => {
        deleteListCart((res) => {
            if(res.statusCode === 200) {
                handleGetCart();
            }
        },id)
    }

    useEffect(() => {
        handleGetCart();
    }, [])
  
  return (
    <div className="checkout">
        <div className="head-floor"></div>
        <div className="checkout-header ">
            <h1 className="checkout-header-title">CHECKOUT</h1>
            <p>Please give me your infomation to order!</p>
        </div>
        <div className="checkout-content row">
            <div className="col-8 checkout-content-left">
                <h3 className="checkout-content-left-title">BILLING DETAILS</h3>
                <div className="checkout-form">
                    <label htmlFor="fullname" className="checkout-label-input">FULL NAME:</label>
                    <input 
                        id="name" 
                        name="name" 
                        value={formik.values.name} 
                        onChange={formik.handleChange} 
                        type="text" 
                        placeholder="Enter Your Full Name Here!"
                    />
                    {formik.errors.name && formik.touched.name && (<div className="form-error mt-2">{formik.errors.name}</div>)}
                </div>
                <div className="checkout-form">
                    <label htmlFor="email" className="checkout-label-input">EMAIL:</label>
                    <input 
                        value={formik.values.email} 
                        onChange={formik.handleChange} 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Enter Your Email Here!"
                    />
                    {formik.errors.email && formik.touched.email && <div className="form-error mt-2">{formik.errors.email}</div>}
                </div>
                <div className="checkout-form">
                    <label htmlFor="phone" className="checkout-label-input">PHONE NUMBER:</label>
                    <input 
                        value={formik.values.phone} 
                        onChange={formik.handleChange} 
                        type="number" 
                        name="phone" 
                        id="phone" 
                        placeholder="Enter Your Phone Number Here!"
                    />
                    {formik.errors.phone && formik.touched.phone && <div className="form-error mt-2">{formik.errors.phone}</div>}
                </div>
                <div className="checkout-form">
                    <label htmlFor="address" className="checkout-label-input">ADDRESS:</label>
                    <input 
                        value={formik.values.address} 
                        onChange={formik.handleChange} 
                        type="text" 
                        name="address" 
                        id="address" 
                        placeholder="Enter Your Address Here!"
                    />
                    {formik.errors.address && formik.touched.address && <div className="form-error mt-2">{formik.errors.address}</div>}
                </div>
                <div className="checkout-submit" onClick={formik.handleSubmit}>Place order</div>
            </div>
            <div className="col-4 checkout-content-right">
                <div className="checkout-content-right-content">
                    <h3 className="checkout-content-right-content-title">YOUR ORDER</h3>
                    {
                        listOrder.length > 0 && listOrder.map((obj,key) => {
                            return <div key={key} className="order-item">
                                <h3>{obj.name_product}</h3>
                                <p><Numeral value={obj.price_product} format={"0,0"}/> VND x {obj.quantity}</p>
                                <div className="delete-cart" onClick={() => handleDeleteCart(obj._id)}>X</div>
                            </div>
                        })
                    }
                    <div className="order-total">
                        <h3>TOTAL</h3>
                        <p><Numeral value={total} format={"0,0"}/> VND</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default CheckoutComponent;