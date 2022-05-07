import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../Firebase/Firebase.init";

const AddItem = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const url = e.target.url.value;
    const desc = e.target.desc.value;
    const supplier = e.target.supplier.value;
    const quantity = e.target.quantity.value;
    const price = e.target.price.value;
    const newProduct = { name, email, url, desc, supplier, quantity, price };
    fetch(`https://pacific-scrubland-98119.herokuapp.com/mobile`, {
      method: "POST",
      body: JSON.stringify({
        newProduct,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("Item Added Successfully", { id: "toastId" });
        e.target.reset();
      });
  };
  const [user] = useAuthState(auth);

  return (
    <div className="bg-gray-200 py-10">
      <form
        onSubmit={handleForm}
        className="rounded-2xl md:w-1/2 mx-auto py-5 bg-gray-400"
      >
        <h1 className="flex justify-center text-4xl font-bold font-serif text-blue-700 pt-5 pb-5">
          Fill This Form
        </h1>
        <input
          type="text"
          name="name"
          placeholder="Enter Product Name"
          required
          className="block py-1 pl-3 rounded-md text-lg bg-gray-200 border-2 m-4 w-9/12 mx-auto"
        />
        <input
          type="email"
          name="email"
          value={user?.email}
          required
          readOnly
          className="block py-1 pl-3 rounded-md text-lg bg-gray-200 border-2 m-4 w-9/12 mx-auto"
        />
        <input
          type="text"
          name="url"
          placeholder="Enter Image URL"
          required
          className="block py-1 pl-3 rounded-md text-lg bg-gray-200 border-2 m-4 w-9/12 mx-auto"
        />
        <textarea
          name="desc"
          placeholder="Write Description Here"
          className="block py-1 pl-3 rounded-md text-lg bg-gray-200 border-2 m-4 w-9/12 mx-auto resize-none"
        />
        <input
          type="text"
          name="supplier"
          placeholder="Enter Supplier Name"
          required
          className="block py-1 pl-3 rounded-md text-lg bg-gray-200 border-2 m-4 w-9/12 mx-auto"
        />
        <input
          type="number"
          name="quantity"
          placeholder="Enter Product Quantity"
          required
          className="block py-1 pl-3 rounded-md text-lg bg-gray-200 border-2 m-4 w-9/12 mx-auto"
        />
        <input
          type="number"
          name="price"
          placeholder="Enter Product Price"
          required
          className="block py-1 pl-3 rounded-md text-lg bg-gray-200 border-2 m-4 w-9/12 mx-auto"
        />
        <input
          type="submit"
          value="Add Item"
          className="mx-auto bg-slate-500 px-5 py-1 flex justify-center mt-8 rounded-md text-xl font-bold"
        />
      </form>
    </div>
  );
};

export default AddItem;
