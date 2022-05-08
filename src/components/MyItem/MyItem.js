import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "./../../Firebase/Firebase.init";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [mobiles, setMobiles] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/items?email=${email}`)
      .then((res) => res.json())
      .then((data) => setMobiles(data));
  }, [email, mobiles]);
  
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
      <h2 className="text-5xl font-serif text-center pt-2 text-sky-600">
        You Added <span className="text-8xl font-bold text-red-500 px-2">{mobiles.length}</span> Item
      </h2>
      <div className="grid md:grid-cols-3 gap-10 pt-7 pb-14 px-12">
        {mobiles.map((mobile) => (
          <div className="bg-white rounded-xl" key={mobile._id}>
            <div>
              <img
                className="h-[250px] w-10/12 mx-auto  pb-3 pt-5"
                src={mobile.img}
                alt=""
              />
            </div>
            <div className="px-5">
              <p className="text-xl font-bold pb-3">{mobile.name}</p>
              <p className="text-lg font-semibold pb-1 font-serif">
                Supplier: {mobile.supplier}
              </p>
              <p className="text-lg font-semibold pb-1">
                Quantity: {mobile.quantity}
              </p>
              <p className="text-xl font-semibold font-sans">
                Price: {mobile.price}
              </p>
            </div>
            <div className="flex justify-center py-5">
              <button
                onClick={() => handleDelete(mobile._id)}
                className="bg-red-600 text-white font-bold px-5 py-1 mt-2 rounded-full"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItem;
