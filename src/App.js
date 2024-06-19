import { useNavigate, Route,Routes } from 'react-router-dom';
import { useEffect,useState } from 'react';
import LoginComponent from './Components/Login';
import HomeComponent from './Components/Home';
import HomePageComponent from './Components/HomePage';
import ProductDetailComponent from './Components/Product-detail';
import CheckoutComponent from './Components/Checkout';
import HistoryComponent from './Components/History';
import ViewOrderComponent from './Components/View-order';
import { CartContext } from './Contexts/CartContext';
import { getListCart } from './Services/CartService';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListProductComponent from './Components/Product-list';
import AboutUs from './Components/about-us';

function App() {
  const [listCart,setListCart] = useState([]);
  const userId = localStorage.getItem('userId');

  const handleGetListCart = () => {
    getListCart((res) => {
      if(res.statusCode === 200) {
        setListCart(res.data);
      }
    }, userId);
  };

  useEffect(() => {
    handleGetListCart();
  },[]);

  return (
    <div className="App">
      <CartContext.Provider value={{listCart,handleGetListCart}}>
        <Routes>
          {/* <Route path="/" element={<LoginComponent/>}/> */}
          <Route path="/" element={<HomeComponent/>}>
            <Route path="" element={<HomePageComponent/>}/>
            <Route path="product-detail/:id" element={<ProductDetailComponent/>}/>
            <Route path="product-list" element={<ListProductComponent/>}/>
            <Route path="checkout" element={<CheckoutComponent/>}/>
            <Route path="about-us" element={<AboutUs/>}/>
            <Route path="history" element={<HistoryComponent/>}/>
            <Route path="view-order/:id" element={<ViewOrderComponent/>}/>
          </Route>
        </Routes>
      </CartContext.Provider>
      <ToastContainer/>
    </div>
  );
}

export default App;
