import { useNavigate,Link } from "react-router-dom";
import { useState,useContext } from 'react';
import { CartContext } from "../Contexts/CartContext";
import '../css/home.css';

function NavbarComponent(props) {

    const {listCart} = useContext(CartContext);
    const username = localStorage.getItem('username');
    const navigate = useNavigate();
    const [colorTitle, setColorTitle] = useState(true);
    const [switchNav, setSwitchNav] = useState(true);
    const [styleHeader, setStyleHeader] = useState({});
    const [colorLogo,setColorLogo] = useState({});
    const [numberScrollY, setNumberScrollY] = useState(0);

  const handleScrollHeader = () => {
    if(window.scrollY > numberScrollY) {
      setSwitchNav(false);
      setNumberScrollY(window.scrollY);
    } else {
      setNumberScrollY(window.scrollY);
      setSwitchNav(true);
      setStyleHeader({
        backgroundColor: '#fff',
        color: 'black',
        boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'
      })
      setColorLogo({
        color: '#006039'
      })
    }
    if(window.scrollY === 0) {
      setStyleHeader({background: 'none'})
      setColorLogo({})
    }
  };


  window.addEventListener('scroll',handleScrollHeader);
        
    const clearUser = () => {
        localStorage.clear();
        navigate('/');
    };
  
  const moveToCart = () => {
    navigate('/home/checkout');
  };

  const moveToHistory = () => {
    navigate('/home/history');
  };
    
  const handleMouseMoveHeader = () => {
    setColorLogo({color: '#006039'})
    setStyleHeader({
      backgroundColor: '#fff',
      color: 'black',
      boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
    })
  }

  const handleMouseOutHeader = () => {
    if(window.scrollY < 80) {
      setStyleHeader({})
      setColorLogo({})
    }
  }

  const backHome = () => {
    setColorTitle(true);
    navigate('/home');
  };

  const moveToShop = () => {
    setColorTitle(false)
  };

  return (
    <div 
          className={switchNav? 'header' : 'header not-active-translate'} 
          style={styleHeader}
          onMouseMove={handleMouseMoveHeader}
          onMouseOut={handleMouseOutHeader}
        >
          <div className="header-name header-left">
            <h5 className="header-name-item mr-4" onClick={backHome} style={{color: colorTitle? '#f2da98' : ''}}>Trang Chủ</h5>
            <h5 className="header-name-item" onClick={moveToShop} style={{color: colorTitle? '' : '#f2da98'}}>Giới thiệu</h5>
          </div>

          <div className='header-logo' style={colorLogo}>
            <h3>TENSHI</h3>
          </div>

          <div className="header-user header-right">
            <div className="header-user-item header-right-flex" onClick={moveToCart}>
              <div className="header-user-item-icon"><i class="fa-solid fa-cart-arrow-down"></i></div>
              <p className="header-user-item-name">Giỏ hàng</p>
              {
                listCart.length > 0 && <div className="cart-number">{listCart.length}</div>
              }
            </div>
            <div className="header-user-item header-right-flex" onClick={moveToHistory}>
              <div className="header-user-item-icon"><i class="fa-regular fa-circle-user"></i></div>
              <p className="header-user-item-name">{username}</p>
            </div>
            {/* <div className="header-user-item " onClick={clearUser}>
              <p className="header-user-item-logout">Logout</p>
            </div> */}
          </div>
        </div>
  );
}

export default NavbarComponent;