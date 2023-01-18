import React from "react";
import assets from "../../assets/Asset 1.svg";
const SearchBarHome = () => {
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
          <div className="bg-gray-900 w-[500px] h-[50px] rounded-md border border-1 border-gray-800"></div>
        </div>
      </div>
    </section>
  );
};

export default SearchBarHome;
