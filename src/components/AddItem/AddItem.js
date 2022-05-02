import React from "react";

const AddItem = () => {
  const handleForm = (e) => {
      e.preventDefault()
      const name = e.target.name.value
      const email = e.target.email.value
      const url=e.target.url.value
      const desc=e.target.desc.value
      const supplier = e.target.supplier.value;
      const quantity = e.target.quantity.value;
      const price = e.target.price.value
      const newProduct = { name, email, url, desc, supplier, quantity, price }
      console.log(newProduct);
  };

  return (
    <form onSubmit={handleForm} className="w-1/2 mx-auto my-16 border-2 py-16">
      <input
        type="text"
        name="name"
        placeholder="Enter Product Name"
        required
        className="block border-2 m-2 w-10/12 mx-auto"
      />
      <input
        type="email"
        name="email"
        required
        className="block border-2 m-2 w-10/12 mx-auto"
      />
      <input
        type="text"
        name="url"
        placeholder="Enter Image URL"
        required
        className="block border-2 m-2 w-10/12 mx-auto"
      />
      <textarea
        name="desc"
        placeholder="Write Description Here"
        className="block border-2 m-2 w-10/12 mx-auto resize-none"
      />
      <input
        type="text"
        name="supplier"
        placeholder="Enter Supplier Name"
        required
        className="block border-2 m-2 w-10/12 mx-auto"
      />
      <input
        type="number"
        name="quantity"
        placeholder="Enter Product Quantity"
        required
        className="block border-2 m-2 w-10/12 mx-auto"
      />
      <input
        type="number"
        name="price"
        placeholder="Enter Product Price"
        required
        className="block border-2 m-2 w-10/12 mx-auto"
      />
      <input
        type="submit"
        value="Add Item"
        className="mx-auto bg-slate-500 px-3 py-1 flex justify-center mt-5 rounded-md text-xl font-bold"
      />
    </form>
  );
};

export default AddItem;
