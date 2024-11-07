import React from "react";
import { PiArrowUpRight } from "react-icons/pi";

const GetStarted = () => {
  return (
    <div>
      <a
        href="#features"
        className="hover:shadow-md transition-all hover:shadow-secondary md:w-[140px] md:h-[140px] sm:w-[180px] sm:h-[180px] w-[90px] h-[90px] bg-blue-gradient cursor-pointer select-none captilize font-poppins flex items-center justify-center rounded-full hover:scale-110 transition-all"
      >
        <div className="md:w-[135px] md:h-[135px] sm:w-[175px] sm:h-[175px] w-[85px] h-[85px] bg-primary rounded-full flex items-center justify-center">
          <p className="text-sm sm:text-2xl md:text-xl text-black text-center font-semibold">
            <span className="flex items-center">
              get <PiArrowUpRight className="text-2xl" />
            </span>
            started
          </p>
        </div>
      </a>
    </div>
  );
};

export default GetStarted;
