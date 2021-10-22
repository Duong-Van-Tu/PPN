import React, { useState, useEffect } from "react";
import {services} from "../../data/data"
import BtnSlider from "../BtnSlider"
import './Banner.css'
const Banner = () => {
  
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== services.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === services.length) {
      setSlideIndex(1);
    }
  };
  useEffect(() => {
    const timeoutSlider = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearTimeout(timeoutSlider);
    };
  });

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(services.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };
  return (
    <div className="home__banner relative h-screen w-full overflow-hidden">
      {services.map((data, index) => {
        return (
          <div
            key={index}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={`./images/img${index + 1}.png`} alt="" />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
      <div className="absolute w-full top-0">
        <div className="banner-top top-0 py-16">
          <div className="banner-slogan">
            <div className="text-center pb-4 text-3xl font-medium">
              Giao Nhận Vận Tải & Logistics{" "}
            </div>
            <div className="banner-slogan-text text-center text-3xl font-bold">
              Nhanh Chóng - Chuyên Nghiệp - Linh Hoạt - Hiệu Quả
            </div>
          </div>
          {/* <div className="banner-search text-center pt-16">
            <input
              className="py-2 px-4 w-2/4 rounded-l-full outline-none font-normal"
              type="text"
              placeholder="Tìm kiếm..."
            />
            <button className="py-2 px-3 font-normal rounded-r-full">
              Tìm kiếm
            </button>
          </div> */}
        </div>
        <div className="banner-bottom"></div>
      </div>
    </div>
  );
};

export default Banner;
