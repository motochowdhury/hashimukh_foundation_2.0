import React from "react";
import logo from "../../assets/hmk__logo_small.png";

const Header = () => {
  let navItems = [
    { link: "#home", name: "হোম" },
    { link: "#home", name: "ব্লাড_খুঁজুন" },
    { link: "#home", name: "এডমিনেট্রেশন" },
    { link: "#home", name: "যোগাযোগ করুন" },
  ];
  return (
    <section>
      <nav className="flex flex-col lg:flex-row items-center lg:justify-between bg-white/0 backdrop-blur-xl">
        <div className="flex items-center justify-around w-full lg:w-auto">
          <div className="flex items-center">
            <img
              className="lg:w-[100px] lg:h-[100px] w-20 h-20"
              src={logo}
              alt=""
            />
            <h1 className="text-green-500 text-2xl lg:text-3xl font-sandwip">
              হাঁসি মুখ ফাউন্ডেশন
            </h1>
          </div>
          <div className="lg:hidden text-white">close</div>
        </div>
        <ul className="flex flex-col lg:flex-row space-x-4 font-sandwip text-gray-500">
          {navItems.map((link) => (
            <li
              key={link.name}
              className="hover:text-white hover:transition-all duration-300"
            >
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Header;
