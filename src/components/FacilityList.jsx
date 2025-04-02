import React from 'react'
import { facilities } from '../constants'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FacilityList = () => {
  return (
    <div className="facilities">
      {facilities.map((fac) => {
        const settings = {
          dots: false,
          infinite: fac.images.length > 1, // Infinite only if more than 1 image
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: fac.images.length > 1, // Autoplay only if multiple images
          autoplaySpeed: 2000,
          arrows: fac.images.length > 1, // Hide arrows if only 1 image
        };

        return (
          <div className="facility" key={fac.id}>
            <h3>{fac.title}</h3>
            <Slider {...settings} className="image-carousel">
              {fac.images.map((img, index) => (
                <div key={index} className="image-slide">
                  <img src={img} alt={`Facility ${fac.title}`} />
                </div>
              ))}
            </Slider>
            <p>{fac.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FacilityList;
