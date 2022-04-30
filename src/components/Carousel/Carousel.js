import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../Utilities/iPhone-13-2.jpg";
import img2 from "../../Utilities/mate 40pro.jpg";
import img3 from "../../Utilities/note 22ultra.jpg";
import img4 from "../../Utilities/oneplus 8.jpg";
import img5 from "../../Utilities/pixel 6.jpg";
import img6 from "../../Utilities/z fold 3.jpg";

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
};

const Carousel = () => {
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={img1} alt="" className="w-[400px] h-[250px] mx-auto" />
        </div>
        <div>
          <img src={img2} alt="" className="w-[400px] h-[250px] mx-auto" />
        </div>
        <div>
          <img src={img3} alt="" className="w-[400px] h-[250px] mx-auto" />
        </div>
        <div>
          <img src={img4} alt="" className="w-[400px] h-[250px] mx-auto" />
        </div>
        <div>
          <img src={img5} alt="" className="w-[400px] h-[250px] mx-auto" />
        </div>
        <div>
          <img src={img6} alt="" className="w-[400px] h-[250px] mx-auto" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
