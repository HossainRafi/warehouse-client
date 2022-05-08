import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../Utilities/samsung.png";
import img2 from "../../Utilities/huawei.png";
import img3 from "../../Utilities/lg.png";
import img4 from "../../Utilities/mi.png";
import img5 from "../../Utilities/nokia.png";
import img6 from "../../Utilities/oneplus.png";
import img7 from "../../Utilities/sony.png";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2500,
  autoplaySpeed: 2500,
  cssEase: "linear",
};

const Carousel = () => {
  return (
    <div className="px-7 py-10 bg-gray-400">
      <h1 className="mx-auto font-serif font-bold text-4xl text-blue-600 flex justify-center ">
        Our Partners
      </h1>
      <Slider {...settings} className="py-10">
        <div>
          <img src={img1} alt="" className="mx-auto px-2 w-[300px] h-[80px]" />
        </div>
        <div>
          <img src={img2} alt="" className="mx-auto px-2 w-[300px] h-[80px]" />
        </div>
        <div>
          <img src={img3} alt="" className="mx-auto px-2 w-[300px] h-[80px]" />
        </div>
        <div>
          <img src={img4} alt="" className="mx-auto px-2 w-[300px] h-[80px]" />
        </div>
        <div>
          <img src={img5} alt="" className="mx-auto px-2 w-[300px] h-[80px]" />
        </div>
        <div>
          <img src={img6} alt="" className="mx-auto px-2 w-[300px] h-[80px]" />
        </div>
        <div>
          <img src={img7} alt="" className="mx-auto px-2 w-[300px] h-[80px]" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
