import { useEffect, useState } from 'react';
import CategoriesComponent from './Categories';
import ProductsComponent from './Products';
import InformationComponent from './Information';
import '../css/home.css'

function HomePageComponent() {

  
  return (
    <div className="home-page">
      <CategoriesComponent/>
      <ProductsComponent/>
      <InformationComponent/>
    </div>
  );
}

export default HomePageComponent;