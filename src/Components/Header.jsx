import React from "react";

function Header() {
  return (
    <div className="flex justify-between h-20 bg-slate-600 items-center">
      <div className="">
        <h1 className="font-extrabold">Jiten</h1>
      </div>
      <div>
        <ul className="flex gap-8">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact me</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
