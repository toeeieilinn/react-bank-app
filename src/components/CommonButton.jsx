import React from "react";

const CommonButton = ({ btnText }) => {
  return (
    <div>
      <button
        type="button"
        className="p-4 sm:p-5 rounded-lg w-fit capitalize bg-blue-gradient text-black"
      >
        <a href="#feature" target="blank">
          {btnText}
        </a>
      </button>
    </div>
  );
};

export default CommonButton;
