import CategoriesComponent from './Categories';
import ProductsComponent from './Products';
import InformationComponent from './Information';
import SlideMiddleComponent from './SlideMiddle';
import SlidePartnerComponent from './SlidePartner';
import '../css/home.css'

function HomePageComponent() {  
  return (
    <div className="home-page">
      <CategoriesComponent/>
      <SlideMiddleComponent/>
      <ProductsComponent/>
      <SlidePartnerComponent/>
      <InformationComponent/>
    </div>
  );
}

export default HomePageComponent;