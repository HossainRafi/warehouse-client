import React from "react";
import img from "../../Utilities/vision.jpg";

const About = () => {
  return (
    <div className="bg-gray-200">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h1 className="font-serif text-3xl py-3 font-bold px-14">
          Our Vision:
        </h1>
        <p className="font-serif text-xl pt-3 pb-20 text-justify px-14">
          Our vision is to help everyone Enjoy Amazing Technology - is to help
          customers choose, afford and enjoy amazing technology however they
          choose to shop with us. By offering the best range of products, credit
          and services through digital-first omnichannel we will build customer
          relationships that are stickier and more valuable over time, in all
          geographies we operate in.
          <span className="pt-5 block"></span> This will benefit our customers,
          our colleagues, our shareholders and society. It also has a powerful
          social purpose at its heart. We believe in the power of technology to
          improve lives, help people stay connected, productive, healthy, and
          entertained. We’re here to help everyone enjoy those benefits and with
          our scale and expertise, we are uniquely placed to do so.
        </p>
      </div>
    </div>
  );
};

export default About;
