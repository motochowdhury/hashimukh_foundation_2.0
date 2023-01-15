import React from "react";
import logo from "../../assets/hmk__logo_small.png";

const Header = () => {
  return (
    <section>
      <nav className="flex items-center lg:justify-between">
        <div className="flex items-center">
          <img className="w-[100px] h-[100px]" src={logo} alt="" />
          <h1 className="text-green-500 text-3xl font-sandwip">
            হাঁসি মুখ ফাউন্ডেশন
          </h1>
        </div>
        <ul className="flex space-x-4 font-sandwip text-gray-500">
          <li className="hover:text-white">
            <a href="">হোম</a>
          </li>
          <li className="hover:text-white">
            <a href="">ব্লাড_খুঁজুন</a>
          </li>
          <li className="hover:text-white">
            <a href="">এডমিনেট্রেশন</a>
          </li>
          <li className="hover:text-white">
            <a href="">যোগাযোগ করুন</a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
