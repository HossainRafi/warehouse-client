import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product,children }) => {
  const navigate = useNavigate();
  const { _id, name, price, quantity, supplier, desc, img } = product;
  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };
  return (
    <div className="bg-white rounded-xl">
      <div>
        <img className="h-[250px] w-10/12 mx-auto pb-3 pt-5" src={img} alt="" />
      </div>
      <div className="px-5">
        <p className="text-xl font-bold pb-3">{name}</p>
        <p className="text-gray-700 pb-2">{desc}</p>
        <p className="text-lg font-semibold pb-1 font-serif">
          Supplier: {supplier}
        </p>
        <p className="text-lg font-semibold pb-1">
          Quantity:{" "}
          {quantity ? (
            quantity
          ) : (
            <span className="text-red-600 font-bold">Sold Out</span>
          )}
        </p>
        <p className="text-xl font-semibold font-sans">Price: {price}</p>
        <div className="flex justify-between py-5">
          <button
            onClick={() => handleUpdate(_id)}
            className="bg-blue-600 text-white font-bold px-5 py-1 mt-2 rounded-full"
          >
            Update
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Product;
