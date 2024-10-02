import React from 'react';
import './listing.css';

const Listing = () => {
  return (
    <div className="listingPage">
      <div className="gridContainer">
        <div className="collegeCard">
          <img src="path_to_image_1.jpg" alt="College 1" className="collegeImage" />
          <p className="collegeName">DMCE</p>
        </div>
        <div className="collegeCard">
          <img src="path_to_image_2.jpg" alt="College 2" className="collegeImage" />
          <p className="collegeName">VJTI Mumbai</p>
        </div>
        <div className="collegeCard">
          <img src="path_to_image_3.jpg" alt="College 3" className="collegeImage" />
          <p className="collegeName">KJ Somaiya</p>
        </div>
        <div className="collegeCard">
          <img src="path_to_image_4.jpg" alt="College 4" className="collegeImage" />
          <p className="collegeName">SPIT</p>
        </div>
        <div className="collegeCard">
          <img src="path_to_image_5.jpg" alt="College 5" className="collegeImage" />
          <p className="collegeName">VESIT</p>
        </div>
        <div className="collegeCard">
          <img src="path_to_image_6.jpg" alt="College 6" className="collegeImage" />
          <p className="collegeName">TSEC</p>
        </div>
        <div className="collegeCard">
          <img src="path_to_image_7.jpg" alt="College 7" className="collegeImage" />
          <p className="collegeName">CRCE</p>
        </div>
        <div className="collegeCard">
          <img src="path_to_image_8.jpg" alt="College 8" className="collegeImage" />
          <p className="collegeName">TCET</p>
        </div>
      </div>
    </div>
  );
};

export default Listing;
