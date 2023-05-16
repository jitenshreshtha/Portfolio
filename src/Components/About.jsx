import React from "react";

function About() {
  return (
    <div className="h-screen">
      <div className="flex justify-center h-7">
        <p className="font-roboto font-extrabold text-5xl">About Me</p>
      </div>
      <div className="flex justify-between items-center h-full">
        <div className="ml-32 w-full"><p className="font-roboto font-extrabold text-3xl ">Jiten shreshtha</p>
        <p>My intro</p>
        </div>
        <div className="w-full">
            <p className="mx-10 px-10 w-auto">Completed BE in Computer Engineering from Lumbini Engineering college(PU).
                Software and Web Applications Developer with years of practice and experience. 
                Proven ability to leverage full-stack expertise to build interactive and user-centered website designs to scale. 
                My interests are in Dynamic Web Applications, Interactive Front end Web Apps. 
            </p>
            <div>
                
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
