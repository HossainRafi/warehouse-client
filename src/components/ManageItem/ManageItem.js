import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Product from "./../Product/Product";
import toast from "react-hot-toast";

const ManageItem = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://pacific-scrubland-98119.herokuapp.com/mobiles")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  const handleDelete = (id) => {
    fetch(`https://pacific-scrubland-98119.herokuapp.com/mobile/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully Deleted", { id: "toastId" });
      });
  };
  return (
    <div className="bg-gray-200">
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/addItem")}
          className="rounded-3xl bg-blue-600 text-white text-xl font-bold px-4 py-1 mt-5"
        >
          Add Item
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-10 p-10">
        {products.map((product) => (
          <Product key={product._id} product={product}>
            <button
              onClick={() => handleDelete(product._id)}
              className="bg-red-600 text-white font-bold px-5 py-1 mt-2 rounded-full"
            >
              Delete
            </button>
          </Product>
        ))}
      </div>
    </div>
  );
};

export default ManageItem;
