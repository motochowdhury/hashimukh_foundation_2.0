import React from "react";

const Home = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="relative">
        <div className="bg-blue-600 h-[600px] absolute w-10 rounded-t-full left-32 opacity-30 rounded-b-full rotate-12 lg:-rotate-45 blur-2xl"></div>
        <div className="absolute top-32 bg-orange-500 opacity-30 h-[600px] w-20 rounded-t-full rounded-b-full rotate-12 lg:-rotate-45 blur-xl"></div>
      </div>
    </section>
  );
};

export default Home;
