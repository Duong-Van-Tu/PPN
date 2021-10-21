import React from "react";

export default function BtnSlider({ direction, moveSlide }) {;
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {direction === "next" ? <i className="text-2xl text-yellow-700 fad fa-angle-right"></i> : <i className="text-2xl text-yellow-700 fad fa-angle-left"></i>}
    </button>
  );
}