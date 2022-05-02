import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Product from './../Product/Product';

const Inventory = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
      fetch("fd.json")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    return (
      <div>
        <h1 className="text-center text-3xl text-red-500 font-serif font-bold">
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
            className="rounded-xl bg-blue-500 text-white text-xl font-bold px-6 py-2"
          >
            Manage Inventories
          </button>
        </div>
      </div>
    );
};

export default Inventory;