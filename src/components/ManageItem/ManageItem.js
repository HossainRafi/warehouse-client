import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Product from './../Product/Product';

const ManageItem = () => {
   const [products, setProducts] = useState([]);
   const navigate = useNavigate();
   useEffect(() => {
     fetch("fd.json")
       .then((res) => res.json())
       .then((data) => setProducts(data));
   }, []);
    return (
      <div className="bg-gray-200">
        <div className="grid md:grid-cols-3 gap-10 p-10">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/addItem")}
            className="rounded-xl bg-gray-500 text-white text-xl font-bold px-4 py-1 mb-10"
          >
            Add Item
          </button>
        </div>
      </div>
    );
};

export default ManageItem;