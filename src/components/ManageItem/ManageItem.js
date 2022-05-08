import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Product from "./../Product/Product";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const ManageItem = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://pacific-scrubland-98119.herokuapp.com/mobiles")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are You Sure To Delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://pacific-scrubland-98119.herokuapp.com/mobile/${id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          });
      }
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
