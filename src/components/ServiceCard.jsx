import React from "react";
import CommonTitle from "./CommonTitle";
import CommonButton from "./CommonButton";
import {
  FaMeta,
  FaGoogle,
  FaApple,
  FaCcVisa,
  FaCcMastercard,
} from "react-icons/fa6";
import { SiIbm, SiSamsung } from "react-icons/si";

const ServiceCard = () => {
  return (
    <section className="font-poppins md:py-16 py-10">
      <div className="flex felx-col gap-10">
        <div className="brands-logo flex items-center sm:flex-nowrap flex-wrap w-full gap-10 text-6xl xs:text-7xl ss:text-8xl justify-center sm:text--[130px] text-[#5f5f5fb8] cursor-pointer">
          <FaMeta className="hover:text-white" />
          <FaGoogle className="hover:text-white" />
          <SiIbm className="hover:text-white" />
          <FaApple className="hover:text-white" />
          <SiSamsung className="hover:text-white" />
          <FaCcVisa className="hover:text-white" />
          <FaCcMastercard className="hover:text-white" />
        </div>
      </div>

      <div className="flex sm:flex-row flex-col sm:gap-0 gap-10 sm:items-center justify-between w-full bg-black-gradient-2 rounded-3xl p-6 ss:px-10 ss:py-10 md:px-16 md:py-7 my-10 md:my-16">
        <div>
          <CommonTitle title="Let's try our service now!" />
          <p className="max-w-[470px mt-4 sm:mt-8]">
            {" "}
            Everything you need to accept card payments and grow your business
            anywhere on the planet. Get Started
          </p>
        </div>
        <div>
          <CommonButton btnText="get started" />
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
