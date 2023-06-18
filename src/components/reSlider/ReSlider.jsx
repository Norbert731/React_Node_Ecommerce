import React from "react";
import "./reslider.scss";
import Slider from "infinite-react-carousel";
import CategoryCard from "../categoryCard/CategoryCard";

function ReSlider({ children, slidesToShow, arrowsScroll }) {
  return (
    <div className="reslider">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
}

export default ReSlider;
