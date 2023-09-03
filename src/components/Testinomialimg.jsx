import React from "react";
import { test1, test2, test3, test4 } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
const Testinomialimg = () => {
  return (
    <div className="testimonial-bg  md:p-8">
       <div className="flex justify-center text-center">
              <h1 className="text-black font-bold text-center">Our </h1>
              <h1 className="text-[#5D9943] font-bold text-center">Testimonials</h1>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-x-32  mx-24 my-14">
              <div className="flex w-[1200px]">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mr-10 mt-10 br-0 h-72  w-6/12">
              <div className="flex items-center">
                <div className="w-1/3">
                  <img
                    className="ml-12 mt-3 rounded-l-full w-28 h-28"
                    src={test1}
                    alt="alt"
                  />
                </div>
                <div className="mt-3 w-1/3 py-4">
                  <p className="text-gray-800 font-bold text-xl mb-2">
                  John Anderson
                  </p>
                  <p className="text-gray-500 text-sm mb-2">
                  Small Business Owner
                  </p>
                  <p className="text-gray-400 text-base  w-96">
                  Ever since I started using this fintech application, 
                  managing my invoices has become a breeze. The intuitive
                   interface and advanced features have helped me streamline
                    my financial operations, saving me valuable time and effort. 
                   
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <a href="#" className="text-white ">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className=" pl-40 text-2xl  ml-20  text-blue-500 hover:text-blue-700"
                  />
                </a>
                <a href="#" className="text-white ">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-2xl text-blue-500 hover:text-blue-700"
                  />
                </a>
                <a href="#" className="text-white ">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="text-2xl text-blue-500 hover:text-blue-700"
                  />
                </a>
                <a href="#" className="text-white ">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-2xl  text-blue-500 hover:text-blue-700"
                  />
                </a>
              </div>
            </div>
            </div>
            <div className="flex w-[1200px]">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mr-10 mt-10 br-0 h-72  w-6/12">
              <div className="flex items-center">
                <div className="w-1/3">
                  <img
                    className="ml-12 mt-3 rounded-l-full w-28 h-28"
                    src={test2}
                    alt="alt"
                  />
                </div>
                <div className="mt-3 w-1/3 py-4">
                  <p className="text-gray-800 font-bold text-xl mb-2">
                  Sarah Lewis
                  </p>
                  <p className="text-gray-500 text-sm mb-2">
                  Individual Investor

                  </p>
                  <p className="text-gray-400 text-base  w-96">
                  The trading dashboard in this fintech application has been a game-changer for my investment strategies. The real-time market analysis, comprehensive charts, and insightful data helped to make informed trading decisions. </p>
                </div>
              </div>
              <div className="flex gap-3">
                <a href="#" className="text-white ">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className=" pl-40 text-2xl  ml-20  text-blue-500 hover:text-blue-700"
                  />
                </a>
                <a href="#" className="text-white ">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-2xl text-blue-500 hover:text-blue-700"
                  />
                </a>
                <a href="#" className="text-white ">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="text-2xl text-blue-500 hover:text-blue-700"
                  />
                </a>
                <a href="#" className="text-white ">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-2xl  text-blue-500 hover:text-blue-700"
                  />
                </a>
              </div>
            </div>
            </div>

            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-x-32  mx-24 my-14">
              <div className="flex w-[1200px]">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mr-10 mt-10 br-0 h-72  w-6/12">
              <div className="flex items-center">
                <div className="w-1/3">
                  <img
                    className="ml-12 mt-3 rounded-l-full w-28 h-28"
                    src={test3}
                    alt="alt"
                  />
                </div>
                <div className="mt-3 w-1/3 py-4">
                  <p className="text-gray-800 font-bold text-xl mb-2">
                  David Turner
                  </p>
                  <p className="text-gray-500 text-sm mb-2">
                  Financial Enthusiast

                  </p>
                  <p className="text-gray-400 text-base  w-96">
                  As someone who wanted to learn more about finance, this fintech application has been a fantastic resource. The educational materials, gamified learning have made the complex world of finance easily understandable and engaging.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <a href="#" className="text-white ">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className=" pl-40 text-2xl  ml-20  text-blue-500 hover:text-blue-700"
                  />
                </a>
                <a href="#" className="text-white ">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-2xl text-blue-500 hover:text-blue-700"
                  />
                </a>
                <a href="#" className="text-white ">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="text-2xl text-blue-500 hover:text-blue-700"
                  />
                </a>
                <a href="#" className="text-white ">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-2xl  text-blue-500 hover:text-blue-700"
                  />
                </a>
              </div>
            </div>
            </div>
            <div className="flex w-[1200px]">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mr-10 mt-10 br-0 h-72  w-6/12">
              <div className="flex items-center">
                <div className="w-1/3">
                  <img
                    className="ml-12 mt-3 rounded-l-full w-28 h-28"
                    src={test4}
                    alt="alt"
                  />
                </div>
                <div className="mt-3 w-1/3 py-4">
                  <p className="text-gray-800 font-bold text-xl mb-2">
                  Emily Johnson
                  </p>
                  <p className="text-gray-500 text-sm mb-2">
                  Application User
                  </p>
                  <p className="text-gray-400 text-base  w-96">
                  The chatbot support in this fintech application has been a lifesaver. Whenever I have a question or need assistance, the chatbot provides quick and accurate responses. It's like having a knowledgeable financial expert available 24/7. </p>
                </div>
              </div>
              <div className="flex gap-3">
                <a href="#" className="text-white ">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className=" pl-40 text-2xl  ml-20  text-blue-500 hover:text-blue-700"
                  />
                </a>
                <a href="#" className="text-white ">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-2xl text-blue-500 hover:text-blue-700"
                  />
                </a>
                <a href="#" className="text-white ">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="text-2xl text-blue-500 hover:text-blue-700"
                  />
                </a>
                <a href="#" className="text-white ">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-2xl  text-blue-500 hover:text-blue-700"
                  />
                </a>
              </div>
            </div>
            </div>

            </div>
    </div>
  );
};

export default Testinomialimg;
