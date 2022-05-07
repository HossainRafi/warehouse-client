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
  const newQuantity = quantity;
  const handleDelivered = () => {
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

  return (
    <div className="bg-gray-200">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{desc}</p>
        <p>{supplier}</p>
        <p>{quantity}</p>
        <p>{price}</p>
      </div>
      <div>
        <button onClick={() => handleDelivered(id)}>Delivered</button>
        <form>
          <input type="number" name="quantity" placeholder="Add Quantity" />
          <input type="submit" value="Add" />
        </form>
      </div>
      <button onClick={() => navigate("/manageitem")}>Manage Item</button>
    </div>
  );
};

export default UpdateMobile;
