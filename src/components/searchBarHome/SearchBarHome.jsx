import React, { useState } from "react";
import assets from "../../assets/Asset 1.svg";
const SearchBarHome = () => {
  const [toggle, setSearchToggle] = useState(false);
  return (
    <section>
      <div className="h-screen mt-10 px-10 text-center">
        <div className="py-10">
          <img className="w-32 lg:w-40 mx-auto mb-5" src={assets} alt="" />
          <h1 className="text-gray-200 text-2xl md:text-3xl lg:text-4xl font-sandwip">
            রক্তদাতা <span className="text-blue-400">খুঁজুন</span>
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <div className="bg-gradient-to-r from-pink-900 to-green-700 blur-2xl w-[500px] h-[50px] rounded-md border border-1 border-gray-800 opacity-75"></div>
            <div
              onClick={() => setSearchToggle(!toggle)}
              className="absolute inset-0 bg-bg-color w-[500px] h-[50px] rounded-md border border-1 border-gray-800"
            ></div>
            <div
              className={`bg-white h-72 w-80 transition-all duration-1000 ease-out ${
                toggle ? "block" : "hidden"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBarHome;
