import { Outlet, useNavigate,Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import NavbarComponent from "./Navbar";
import FooterComponent from "./Footer";
import '../css/home.css'
import { getListCart } from "../Services/CartService";

function HomeComponent() {

  return (
    <div className="home">
      <NavbarComponent/>
      <div className="is-home-child">
        <Outlet/>
      </div>
      <FooterComponent/>
    </div>
  );
}

export default HomeComponent;