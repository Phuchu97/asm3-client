import { Outlet} from "react-router-dom";
import NavbarComponent from "./Navbar";
import FooterComponent from "./Footer";
import '../css/home.css';

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