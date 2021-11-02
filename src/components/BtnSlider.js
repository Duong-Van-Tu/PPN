import React from "react";

export default function BtnSlider({ direction, moveSlide }) {;
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {direction === "next" ? <i class="fal fa-arrow-right"></i> : <i class="fal fa-arrow-left"></i>}
    </button>
  );
}