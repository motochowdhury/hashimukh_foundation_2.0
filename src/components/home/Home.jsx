import React from "react";
import step_1 from "../../assets/step-1.png";

const Home = () => {
  return (
    <section className="max-w-7xl">
      <div className="grid grid-cols-2">
        <div>
          <div>
            <h1>আসুন মানবতার প্রেমে নিজেকে বিলিয়ে দিই।</h1>
          </div>
        </div>
        <div className="w-full">
          <div className="bg-blue-500 w-80 h-80 rounded-full blur-3xl relative"></div>
          <div className="absolute top-0 w-full">
            <img className="w-72" src={step_1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
