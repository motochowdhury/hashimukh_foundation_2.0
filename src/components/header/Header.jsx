import React, { useState } from "react";
import logo from "../../assets/hmk__logo_small.png";

const Header = () => {
  let navItems = [
    { link: "#home", name: "হোম" },
    { link: "#home", name: "ব্লাড_খুঁজুন" },
    { link: "#home", name: "এডমিনেট্রেশন" },
    { link: "#home", name: "যোগাযোগ করুন" },
  ];
  const [open, setOpen] = useState(true);
  return (
    <nav className="fixed top-0 left-0 w-full h-2/6 z-40">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
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
          <div
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white cursor-pointer"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "#ffffff" }}
              >
                <path d="M5 6a.4.4 0 0 0-.38.62l2 3.38-3.06 5.4a.45.45 0 0 0 0 .45.43.43 0 0 0 .38.19h2.87a.89.89 0 0 0 .79-.55s3-5.31 3.11-5.51l-2-3.46A.91.91 0 0 0 7.92 6zm12.16-4a.84.84 0 0 0-.77.55L10 13.93l4.09 7.52a.91.91 0 0 0 .81.55h2.88a.43.43 0 0 0 .38-.18.45.45 0 0 0 0-.45l-4.07-7.43 6.36-11.31a.45.45 0 0 0 0-.45.44.44 0 0 0-.38-.18z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "#ffffff" }}
              >
                <path d="M21.063 15H13v2h9v-2zM4 7h11v2H4zm0 4h11v2H4zm0 4h7v2H4z"></path>
              </svg>
            )}
          </div>
        </div>
        <ul
          className={`static flex flex-col lg:flex-row space-x-4 font-sandwip text-gray-500 ${
            open ? "flex" : "hidden"
          } transition-all duration-500 ease-in`}
        >
          {navItems.map((link) => (
            <li
              key={link.name}
              className="hover:text-white hover:transition-all duration-300"
            >
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
