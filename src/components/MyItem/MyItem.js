import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import auth from "./../../Firebase/Firebase.init";
import { useNavigate } from 'react-router-dom';

const MyItem = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [mobiles, setMobiles] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    (async () => {
      const url = `https://pacific-scrubland-98119.herokuapp.com/items?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setMobiles(data);
      } catch (error) {
        toast.error(error.message, { id: "error" });
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    })();
  }, [email, mobiles]);
  
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
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
      <h2 className="text-5xl font-serif text-center pt-2 text-sky-600">
        You Added{" "}
        <span className="text-8xl font-bold text-red-500 px-2">
          {mobiles.length}
        </span>{" "}
        Item
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
                Quantity:{" "}
                {mobile.quantity ? (
                  mobile.quantity
                ) : (
                  <span className="text-red-600 font-bold">Sold Out</span>
                )}
              </p>
              <p className="text-xl font-semibold font-sans">
                Price: ${mobile.price}
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
