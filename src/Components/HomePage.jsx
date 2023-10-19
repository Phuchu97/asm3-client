import CategoriesComponent from './Categories';
import ProductsComponent from './Products';
import InformationComponent from './Information';
import SlideMiddleComponent from './SlideMiddle';
import '../css/home.css'

function HomePageComponent() {  
  return (
    <div className="home-page">
      <CategoriesComponent/>
      <SlideMiddleComponent/>
      <ProductsComponent/>
      <InformationComponent/>
    </div>
  );
}

export default HomePageComponent;