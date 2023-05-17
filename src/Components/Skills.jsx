import React from "react";
import {BsBraces} from 'react-icons/bs';
import {RiArrowDropDownLine} from 'react-icons/ri';
import {SiBackendless} from 'react-icons/si';
import {SiProgress} from 'react-icons/si';

function Skills() {
  return (
    <div className="flex flex-col items-center">
      <div>
        <p className="font-roboto font-extrabold text-5xl">Skills</p>
        <p className="mt-3 text-slate-700">My technical Level</p>
      </div>
      <div className="h-screen mt-10">
        <div className="flex gap-4 items-center">
          <div><BsBraces className="text-4xl text-blue-500"/></div>
          <div>
            <p className="font-mono font-extrabold text-xl">Frontend Developer</p>
            <p className="text-slate-700">More than 1 yrs</p>
          </div>
          <div><RiArrowDropDownLine className="text-4xl text-blue-500 ml-7"/></div>
        </div>
        <div className="flex gap-4 mt-7">
          <div><SiBackendless className="text-4xl text-blue-500"/></div>
          <div>
            <p className="font-mono font-extrabold text-xl">Backend Developer</p>
            <p className="text-slate-700">More than 1 yrs</p>
          </div>
          <div><RiArrowDropDownLine className="text-4xl text-blue-500 ml-10"/></div>
        </div>
        <div className="flex gap-4 mt-7">
          <div><SiProgress className="text-4xl text-blue-500"/></div>
          <div>
            <p className="font-mono font-extrabold text-xl">Programming Language</p>
            <p className="text-slate-700">More than 4 yrs</p>
          </div>
          <div><RiArrowDropDownLine className="text-4xl text-blue-500 ml-1"/></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
