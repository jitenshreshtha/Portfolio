import React from "react";

function About() {
  return (
    <div className="h-screen">
      <div className="flex justify-center h-7">
        <p className="font-roboto font-extrabold text-5xl">About Me</p>
      </div>
      <div className="flex justify-between items-center h-full pb-32">
        <div className="ml-32 w-full">
          <p className="font-roboto font-extrabold text-3xl ">
            Jiten shreshtha
          </p>
          <p>My intro</p>
        </div>
        <div className="w-full">
          <p className="mx-10 px-10 w-auto">
            Completed BE in Computer Engineering from Lumbini Engineering
            college(PU). Software and Web Applications Developer with years of
            practice and experience. Proven ability to leverage full-stack
            expertise to build interactive and user-centered website designs to
            scale. My interests are in Dynamic Web Applications, Interactive
            Front end Web Apps.
          </p>
          <div className="flex justify-evenly mt-5 ml-10">
            <div><p className="font-bold">01+</p>
            <p>Years experience</p></div>
            <div><p className="font-bold">10+</p>
            <p>Completed project</p></div>
            <div>
                <p className="font-bold">5+</p>
                <p>Clients Worked with</p>
            </div>
          </div>
          <div className="ml-20 mt-8">

          <button className="p-4 bg-slate-500 border rounded-3xl hover:text-white hover:bg-slate-900 ">Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
