import React, { useEffect, useRef } from "react";
import { LuArrowUpCircle } from "react-icons/lu";

const ScrollTop = () => {
  const arrow = useRef();

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageXOffset >= 180) {
        arrow.current.classList.add("right-10");
      } else {
        arrow.current.classList.remove("right-10");
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="overflow-hidden">
        <button
          aria-level="arrow"
          className={`fixed bottom-6 ss:bottom-10 z-30 -right-full transition-all duration-500 shadow-2xl shadow-black bg-white hover:bg-[#cdcdcd] active:p-[.45rem] p-2 rounded`}
          onClick={scrollToTop}
          ref={arrow}
        >
          <LuArrowUpCircle className="text-xl active:text-lg text-black" />
        </button>
      </div>
    </div>
  );
};

export default ScrollTop;
