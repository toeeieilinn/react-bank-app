import React from "react";

const CommonTitle = ({ title }) => {
  return (
    <div>
      <h1 className="text-3xl ss:text-4xl md:text-5xl leading-normal sm:leading-relaxed md:leading-relaxed font-semibold">
        {title}
      </h1>
    </div>
  );
};

export default CommonTitle;
