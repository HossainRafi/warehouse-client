import React from "react";

const Blogs = () => {
  return (
    <div className="bg-gray-200">
      <div className="grid md:grid-cols-3 gap-10 py-16 px-10">
        <div className="bg-white rounded-xl p-5">
          <h2 className="text-xl font-serif font-bold text-red-600 mb-4">
            Difference Between JavaScript & Node.js
          </h2>
          <p className="text-lg text-justify">
            <span className="text-lg font-bold block">JavaScript: </span>
            JavaScript is a programming language. JavaScript running in any
            engine like Spider monkey (FireFox), JavaScript Core (Safari), V8
            (Google Chrome) etc. Basically JavaScript is used in client side.
            Mainly is used in frontend development.
            <span className="text-lg font-bold block mt-3">Node.js: </span>
            Node.js is a runtime environment for JavaScript. It can run only in
            V8 engine. It is mainly used in server side. Node.js is written in
            C, C++
          </p>
        </div>

        <div className="bg-white rounded-xl p-5">
          <h2 className="text-xl font-serif font-bold text-red-600 mb-4">
            Difference Between SQL & NoSQL
          </h2>
          <p className="text-lg text-justify">
            <span className="text-lg font-bold">SQL: </span>
            SQL database are relational. SQL database are table based database.
            SQL database are vertically scalable. SQL database are suited for
            complex queries.
            <span className="text-lg font-bold block mt-3">NoSQL: </span>
            NoSQL databases are non-relational. NoSQL databases can be document
            based, key-value pairs, graph databases. NoSQL databases are
            horizontally scalable. NoSQL database are suited for complex
            queries.
          </p>
        </div>

        <div className="bg-white rounded-xl p-5">
          <h2 className="text-xl font-serif font-bold text-red-600 mb-4">
            The Purpose Of JWT & How JWT Works
          </h2>
          <p className="text-lg text-justify">
            JWT(JSON web token ) is an open standard that defines a compact,
            self-contained way to securely transmit information between parties
            as a JSON object.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;