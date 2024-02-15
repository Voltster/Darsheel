import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const CallToAction = () => {
  return (
    <section className="border-t-2 border-yellow-500 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Join Our Consultancy Programme Now!
          </h2>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-600 hover:to-yellow-800 text-white py-2 px-6 rounded-full shadow-md transition duration-300 transform hover:translate-y-1 hover:shadow-lg">
            Get Started
          </button>
          <div className="mt-4 flex justify-center items-center space-x-4 text-gray-800">
            {/* Social Proof Badges (replace placeholders with actual logos) */}
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
            <a href="">
            <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
