import React from "react";
import img1 from "../../Utilities/ben.jpg";
import img2 from "../../Utilities/david.jpg";
import img3 from "../../Utilities/ross.jpg";

const Ratting = () => {
  return (
      <div className="bg-gray-300">
          <h2 className="text-4xl font-serif font-bold pt-10 text-center text-blue-600">Our Customers Review</h2>
      <div className="grid md:grid-cols-3 gap-10 pt-7 pb-14 px-12">
        <div className="bg-slate-200 rounded-xl py-5">
          <img
            className="h-[80px] w-[80px] rounded-full mx-auto"
            src={img1}
            alt=""
          />
          <h2 className="py-3 text-center font-bold text-xl">Ben Stokes</h2>
          <div>
            <p className="px-6 pb-5 text-justify">
              I had thrown away the details of purchase. But very quickly Phil
              Taylor from the Warehouse directed me to Warranty and supplied me
              with my purchase details. The service has been amazing, friendly
              and helpful. I will use this company to purchase items from again.
              I am very satisfied
            </p>
            <div className="px-5">
              <span className="text-bold font-serif">Ratting: </span>
              <i className="las la-star text-yellow-500"></i>
              <i className="las la-star text-yellow-500"></i>
              <i className="las la-star text-yellow-500"></i>
              <i className="las la-star text-yellow-500"></i>
              <i className="las la-star text-yellow-500"></i>
            </div>
          </div>
        </div>
        <div className="bg-slate-200 rounded-xl py-5">
          <img
            className="h-[80px] w-[80px] rounded-full mx-auto"
            src={img2}
            alt=""
          />
          <h2 className="py-3 text-center font-bold text-xl">David Warner</h2>
          <div className="">
            <p className="px-6 pb-5 text-justify">
              Arrived the next day. The fellows shredder allows you to stack
              paper which it then automatically feeds into the shedder. Genius.
              Basically you dont have to spend ages shredding anymore you just
              drop up to 100 sheets in the loader and walk away. It is also very
              quiet
            </p>
            <div className="px-5">
              <span className="text-bold font-serif">Ratting: </span>
              <i className="las la-star text-yellow-500"></i>
              <i className="las la-star text-yellow-500"></i>
              <i className="las la-star text-yellow-500"></i>
              <i className="las la-star text-yellow-500"></i>
              <i className="las la-star text-yellow-500"></i>
            </div>
          </div>
        </div>
        <div className="bg-slate-200 rounded-xl py-5">
          <img
            className="h-[80px] w-[80px] rounded-full mx-auto"
            src={img3}
            alt=""
          />
          <h2 className="py-3 text-center font-bold text-xl">Ross Taylor</h2>
          <div>
            <p className="px-6 pb-5 text-justify">
              I had previously purchased a binder from another source and it had
              not been satisfactory and I had to return it. I talked to The
              Warehouse.com who was very sympathetic. They discussed my
              requirements and then recommended the Fellows Galaxy 500 Comb
              Binder. I am very satisfied.
            </p>
            <div className="px-5">
              <span className="text-bold font-serif">Ratting: </span>
              <i className="las la-star text-yellow-500"></i>
              <i className="las la-star text-yellow-500"></i>
              <i className="las la-star text-yellow-500"></i>
              <i className="las la-star text-yellow-500"></i>
              <i className="las la-star text-yellow-500"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratting;
