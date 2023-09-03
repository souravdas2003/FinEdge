import React from "react";
import { herofin } from "../assets";
import { useEffect, useState } from "react";
const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <section
      id="hero"
      className="md:grid w-auto md:grid-cols-2 bg-bghero dark:bg-bghero mx-0  md:mx-12 rounded-3xl min-h-[700px] px-5 py-10 md:pt-20 relative"
    >
      
      <div className="md:px-24">
        <p className="text-8xl font-bold leading-[122px] mb-3 text-transparent inline-block bg-gradient-to-r from-[#43995a] to-[#52efae] bg-clip-text">
          FinEdge
        </p>
        <p className="flex text-5xl w-[280px] sm:w-full">
        Empower your finances, unleash your potential{" "}
          <span className="">
            
          </span>
        </p>
        <p className="text-[1.1rem] mt-6 text-justify text-2xl sm:w-full w-[390px] ">
        Our fintech application is a comprehensive platform that integrates invoice management,
         trading dashboard, financial education, gamified learning, stock price prediction, and chatbot support. 
         It empowers businesses and individuals with the tools and knowledge to streamline financial operations, 
         make informed investment decisions, and enhance financial literacy. 
        </p>
        
      </div>
      <div className="h-0 md:h-auto">
        <img
          className="hidden md:block absolute  h-[500px] scale-110"
          src={herofin}
        />
      </div>
      
      
    </section>
  );
};

export default Hero;
