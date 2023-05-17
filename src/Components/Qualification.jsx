import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { BsBriefcase } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";

function Qualification() {
  return (
    <div className="h-screen">
      <div className="flex flex-col items-center">
        <p className="ont-roboto font-extrabold text-5xl">Qualification</p>
        <p className="mt-3 text-slate-700">My Institutional Achievements</p>
      </div>
      <div className="flex justify-evenly mt-16">
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <FaGraduationCap className="mr-2 text-lg text-blue-500" />
            <p className="text-blue-500">Education</p>
          </div>
          <div className="mt-6 flex flex-col justify-center">
            <p className="font-bold">SLC</p>
            <p className="text-slate-600 font-roboto">
              Nava Prabhat English Boarding School
            </p>
            <div className="flex">
              <MdDateRange />
              <p className="text-slate-600 font-roboto ml-2">2004-2014</p>
            </div>
          </div>
          <div className="mt-6">
            <p className="font-bold">High School Degree</p>
            <p className="text-slate-600 font-roboto">
              Shree Sainik Awasiya Mahavidhyalaya
            </p>
            <div className="flex">
              <MdDateRange />
              <p className="text-slate-600 font-roboto ml-2">20014-2016</p>
            </div>
          </div>
          <div className="mt-6 mr-16">
            <p className="font-bold">Computer Engineer</p>
            <p className="text-slate-600 font-roboto">
              Lumbini Engineering College
            </p>
            <div className="flex">
              <MdDateRange />
              <p className="text-slate-600 font-roboto ml-2">2016-2022</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <BsBriefcase className="mr-2 text-lg text-blue-500" />
            <p className="text-blue-500">Technical Experience</p>
          </div>
          <div className="mt-6">
            <p className="font-bold">Assistant Manager</p>
            <p className="text-slate-600 font-roboto">Option Nepal pvt. Ltd.</p>
            <div className="flex">
              <MdDateRange />
              <p className="text-slate-600 font-roboto ml-2">2017-2018</p>
            </div>
          </div>
          <div className="mt-6">
            <p className="font-bold">Frontend Developer</p>
            <p className="text-slate-600 font-roboto">FreeLancer</p>
            <div className="flex">
              <MdDateRange />
              <p className="text-slate-600 font-roboto ml-2">2018-2020</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Qualification;
