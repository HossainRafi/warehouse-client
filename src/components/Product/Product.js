import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product,children }) => {
  const navigate = useNavigate();
  const { _id, name, price, quantity, supplier, desc, img } = product;
  const handleUpdate = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div className="bg-white rounded-xl">
      <div>
        <img className="h-[250px] w-10/12 mx-auto py-3" src={img} alt="" />
      </div>
      <div className="px-5">
        <p className="text-xl font-serif pb-3">{name}</p>
        <p className="text-gray-700 pb-2">{desc}</p>
        <p className="text-lg pb-1 font-serif">Supplier: {supplier}</p>
        <p className="text-lg pb-1">Quantity: {quantity}</p>
        <p className="text-xl font-sans">{price}</p>
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
