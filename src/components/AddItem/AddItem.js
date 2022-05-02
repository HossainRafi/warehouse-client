import React from "react";

const AddItem = () => {
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Enter Product Name"
        required
      />
      <input type="email" name="email" required />
      <input type="text" name="url" placeholder="Enter Image URL" required />
      <textarea name="desc" placeholder="Write Description Here"/>
      <input
        type="text"
        name="supplier"
        placeholder="Enter Supplier Name"
        required
      />
      <input
        type="number"
        name="quantity"
        placeholder="Enter Product Quantity"
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Enter Product Price"
        required
      />
    </div>
  );
};

export default AddItem;
