import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const { _id, name, price, quantity, supplier, desc, img } = product;
  const handleUpdate = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div>
      <div>
        <img className="h-[250px] w-full" src={img} alt="" />
      </div>
      <div>
        <p>{name}</p>
        <p>{desc}</p>
        <p>Supplier: {supplier}</p>
        <p>Quantity: {quantity}</p>
        <p>{price}</p>
        <button
          onClick={() => handleUpdate(_id)}
          className="bg-blue-600 text-white font-bold px-3 py-0 mt-2 rounded-full"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Product;
