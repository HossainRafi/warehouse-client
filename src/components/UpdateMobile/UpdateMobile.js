import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";

const UpdateMobile = () => {
  const { id } = useParams();
  const [mobile, setMobile] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/mobile/${id}`)
      .then((res) => res.json())
      .then((data) => setMobile(data));
  }, [id, mobile]);

  const { name, price, quantity, supplier, desc, img } = mobile;

  const navigate = useNavigate();
  const handleDelivered = () => {
    const newQuantity = quantity - 1;
    fetch(`https://pacific-scrubland-98119.herokuapp.com/mobile/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ newQuantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Delivered Successful", { id: "toastId" });
        }
      });
  };
  const handleForm = (e) => {
    e.preventDefault();
    const addQuantity = e.target.quantity.value;
    const newQuantity = quantity + +addQuantity;
    fetch(`https://pacific-scrubland-98119.herokuapp.com/mobile/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ newQuantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Quantity Added Successfully", { id: "toastId" });
          e.target.reset();
        }
      });
  };

  return (
    <div className="flex py-5">
      <div className="w-1/2 p-5">
        <img className="w-full" src={img} alt="" />
      </div>
      <div className="w-1/2 p-5">
        <div>
          <p className="text-xl font-bold pb-3">{name}</p>
          <p className="text-gray-700 pb-2">{desc}</p>
          <p className="text-lg font-semibold pb-1 font-serif">
            Supplier: {supplier}
          </p>
          <p className="text-lg font-semibold pb-1">Quantity: {quantity}</p>
          <p className="text-xl font-semibold font-sans">Price: {price}</p>
        </div>

        <form onSubmit={handleForm} className="mt-8">
          <input
            className="border-2 rounded-l-md py-1 pl-3 font-semibold text-xl"
            type="number"
            name="quantity"
            placeholder="Add Quantity"
          />
          <input
            className="bg-blue-600 text-white rounded-r-md text-xl font-bold px-4 py-1 "
            type="submit"
            value="Add"
          />
        </form>

        <div className="flex gap-10 mt-10">
          <button
            className="rounded-md bg-blue-600 text-white text-xl font-bold px-2 py-1"
            onClick={handleDelivered}
          >
            Delivered
          </button>

          <button
            className="rounded-md bg-blue-600 text-white text-xl font-bold px-2 py-1"
            onClick={() => navigate("/manageitem")}
          >
            Manage Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateMobile;
