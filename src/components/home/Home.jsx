import React from "react";
import step from "../../assets/step-1.png";

const Home = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="relative">
        <div className="bg-blue-600 h-[600px] absolute w-10 rounded-t-full left-32 opacity-30 rounded-b-full rotate-12 lg:-rotate-45 blur-2xl"></div>
        <div className="absolute top-32 bg-orange-500 opacity-30 h-[600px] w-20 rounded-t-full rounded-b-full rotate-12 lg:-rotate-45 blur-xl"></div>
        <div className="absolute inset-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 pt-32">
            <div className="flex flex-col justify-center w-[500] px-10 md:justify-self-center lg:justify-self-end">
              <div className="relative">
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl md:text-center lg:text-left text-left font-sandwip leading-8 md:leading-[70px]">
                  আসুন মানবতার প্রেমে নিজেকে
                  <span className="text-orange-500"> বিলিয়ে দেই।</span>
                </h1>
                <svg
                  className="mx-auto absolute top-4 lg:top-5 w-60 md:left-32 lg:left-0 lg:w-[285px] -z-10 opacity-60"
                  // width="285"
                  height="36"
                  viewBox="0 0 285 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.032 30.8758C174.913 8.17291 244.198 23.227 260.856 33.592"
                    stroke="#0EED3F"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10.8883 26.2809C179.346 0.0467996 261.154 18.3519 281 30.7836"
                    stroke="#0EED3F"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3.17642 20.1357C171.634 -6.09837 253.442 12.2067 273.288 24.6385"
                    stroke="#0EED3F"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4.10721 18.0128C172.565 -8.22127 254.373 10.0838 274.219 22.5156"
                    stroke="#0EED3F"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5.03799 15.89C173.496 -10.3442 255.303 7.9609 275.15 20.3927"
                    stroke="#0EED3F"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="space-y-3  lg:text-left w-80 md:w-[500px] lg:w-full">
                <p className="text-xl font-sandwip text-gray-400">
                  হাঁসি মুখ ফাউন্ডেশন একটি অরাজনৈতিক রক্তদাতা ও স্বেচ্ছাসেবী
                  সংগটন, যারা মানবতার কাজে সর্বদা নিজেকে প্রস্তুথ রাখে, যাতে
                  সমাজের বোকে সবাই একসাথে হাঁসতে পারি।
                </p>
                <p className="text-xl font-sandwip text-orange-500">
                  আমরা সর্বদায় প্রস্তুথ আপনি আছেন তো?
                </p>
                <div className="flex lg:block justify-center">
                  <button className="bg-orange-500 hover:bg-orange-600 py-2 px-5 font-sandwip text-white rounded-sm hover:shadow-slate-700 hover:shadow-lg text-lg flex hover:transition-all duration-500">
                    সদস্য হোন{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style={{ fill: "#ffffff" }}
                    >
                      <path d="M9 18h3v-2H9c-1.654 0-3-1.346-3-3s1.346-3 3-3h6v3l5-4-5-4v3H9c-2.757 0-5 2.243-5 5s2.243 5 5 5z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-96 px-4 md:px-0 justify-self-center lg:justify-self-end mt-10 lg:mt-0">
              <div className="relative">
                <div className="bg-green-500 w-80 h-96 rounded-full blur-2xl opacity-25"></div>
                <img
                  className="absolute inset-0 w-80 md:w-[500px] lg:w-96 mx-auto"
                  src={step}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
