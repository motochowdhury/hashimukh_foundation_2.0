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
            <div className="bg-gradient-to-r from-pink-900 to-green-700 blur-2xl w-80  lg:px-0 lg:w-[500px]  h-[50px] rounded-md border border-1 border-gray-800 opacity-75 mx-auto"></div>
            <div
              onClick={() => setSearchToggle(!toggle)}
              className="absolute inset-0 bg-gray-500 w-80 lg:w-[500px]  h-[50px] rounded-md border border-1 border-gray-800 flex justify-between items-center cursor-pointer mx-auto px-5"
            >
              <h5 className="text-md lg:text-2xl text-white font-sandwip">
                ক্যাটাগোরাইজ রক্তদাতা খুজতে এখানে চাপুন
              </h5>
              <div>
                {toggle ? (
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{ fill: "#ffffff" }}
                  >
                    <path d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{ fill: "#ffffff" }}
                  >
                    <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path>
                  </svg>
                )}
              </div>
            </div>
            <div
              className={`bg-gray-500 h-72 w-80 px-5 lg:px-0 lg:w-[500px] transition-all duration-1000 ease-linear rounded-md mx-auto ${
                toggle ? "block" : "hidden"
              }`}
            >
              <div className="w-10/12 mx-auto">
                <div className="py-5">
                  <div className="border border-emerald-300 rounded-md bg-white">
                    {/* <label htmlFor="b-group">Select Blood</label> */}
                    <div className="w-1/2 mx-auto ">
                      <select
                        name="b-group"
                        id=""
                        className="block outline-none bg-white w-full"
                      >
                        <option value="A + (tive)">A + (tive)</option>
                        <option value="A - (tive)">A - (tive)</option>
                        <option value="B + (tive)">B + (tive)</option>
                        <option value="B - (tive)">B - (tive)</option>
                        <option value="O + (tive)">O + (tive)</option>
                        <option value="O - (tive)">O - (tive)</option>
                        <option value="AB + (tive)">AB + (tive)</option>
                        <option value="AB - (tive)">AB - (tive)</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="b-group">Select Location</label>
                    <div className="">
                      <select
                        name="b-group"
                        id=""
                        className="block outline-none bg-gray-500"
                      >
                        <option value="ukhiay">Ukhiay</option>
                        <option value="ramu">Ramu</option>
                        <option value="bazar">Cox's Bazar</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <div className="">
                      <label htmlFor="gender">Select Genger</label>
                      <select
                        name="gender"
                        className="block outline-none bg-gray-500"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBarHome;
