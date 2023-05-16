import React from "react";
import { Link } from "react-router-dom";
import Content from "./Content";
import About from "./About";

function Header() {
  return (
    <div>
    <div className="flex justify-between h-20  items-center font-roboto sticky top-0 bg-white">
      <div className="">
        <Link to="/">
          <h1 className="font-extrabold text-2xl ml-20 hover:text-gray-500">
            Jiten
          </h1>
        </Link>
      </div>
      <div>
        <ul className="flex gap-8 mr-10 text">
          <Link>
            <li className="hover:text-gray-500">Home</li>
          </Link>
          <Link>
            <li className="hover:text-gray-500">About</li>
          </Link>
          <Link>
            <li className="hover:text-gray-500">Skills</li>
          </Link>
          <Link>
            <li className="hover:text-gray-500">Services</li>
          </Link>
          <Link>
            <li className="hover:text-gray-500">Portfolio</li>
          </Link>
          <Link>
            <li className="hover:text-gray-500">Contact me</li>
          </Link>
        </ul>
      </div>
    </div>
    <Content />
    <About />
    </div>
  );
}

export default Header;
