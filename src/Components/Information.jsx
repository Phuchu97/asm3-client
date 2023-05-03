import { useNavigate,Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import '../css/information.css'

function InformationComponent() {

  
  return (
    <div className="information">
        <div className="information-content row">
          <div className="information-top col-12">
            <div className="information-top-content row">
              <div className="information-top-content-item col-4">
                <h6>FREE SHIPPING</h6>
                <p>Free shipping worlwide</p>
              </div>

              <div className="information-top-content-item col-4">
                <h6>24 X 7 SERVICE</h6>
                <p>Free shipping worlwide</p>
              </div>

              <div className="information-top-content-item col-4">
                <h6>FESTIVAL OFFER</h6>
                <p>Free shipping worlwide</p>
              </div>
            </div>
          </div>

          <div className="col-12">
                <div className="information-bottom-left row">
                    <div className="information-bottom-left-content text-left col-6">
                      <h6>LET'S BE FRIENDS!</h6>
                      <p>Nisi nisi tempor consequat laboris nisi.</p>
                    </div>
                    <div className="information-bottom-left-content text-right col-6">
                      <input id="information-input" type="text" placeholder="Enter your email address"/>
                      <label className="information-bottom-left-submit" htmlFor="information-input">Subcribe</label>
                    </div>
                </div>
          </div>
        </div>
    </div>
  );
}

export default InformationComponent;