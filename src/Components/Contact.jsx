import React from "react";
import {BiPhoneCall} from 'react-icons/bi';
import {AiOutlineMail} from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';

function Contact() {
  return (
    <div className="h-screen">
      <div className="flex flex-col items-center">
        <p className="ont-roboto font-extrabold text-5xl">Contact Me</p>
        <p className="mt-3 text-slate-700">Lets Work Together</p>
      </div>
      <div className="flex mt-8 justify-evenly font-roboto">
        <div className="flex flex-col">
          <div className="flex items-center">
            <p><BiPhoneCall className="text-xl text-blue-600"/></p>
            <div className="ml-4">
              <p>Call me </p>
              <p>+977-98040158368</p>
            </div>
          </div>
          <div className="flex items-center mt-5">
            <p><AiOutlineMail className="text-xl text-blue-600"/></p>
            <div className="ml-4">
              <p>Email </p>
              <p>jitenshreshtha07@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center mt-5">
            <p><GoLocation className="text-xl text-blue-600"/></p>
            <div className="ml-4">
              <p>Location</p>
              <p>Butwal, Nepal</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <p>Name</p>
            <input
              type="text"
              className="border-2 border-solid border-black rounded-lg"
            />
          </div>
          <div>
            <p>Email</p>
            <input
              type="text"
              className="border-2 border-solid border-black rounded-lg"
            />
          </div>
          <div>
            <p>Message</p>
            <input
              type="textarea"
              className="border-2 border-solid border-black rounded-lg w-40 h-32"
              rows={5}
              cols={5}
              
            />
          </div>

          <div className="mt-10">
            <button className="border rounded-xl bg-blue-600 text-white p-4">Send Message</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
