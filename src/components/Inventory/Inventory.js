import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Product from './../Product/Product';

const Inventory = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
      fetch("https://pacific-scrubland-98119.herokuapp.com/mobiles")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    return (
      <div>
        <h1 className="text-center text-3xl text-red-500 font-serif font-bold mt-20">
          INVENTORY
        </h1>
        <div className="grid md:grid-cols-3 gap-10 m-10">
          {products.slice(0, 6).map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/manageItem")}
            className="rounded-2xl bg-blue-600 text-white text-xl font-bold px-4 py-1 mb-10"
          >
            Manage Inventories
          </button>
        </div>
      </div>
    );
};

export default Inventory;