import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Service.css";
import { services } from "../../data/data";
export default function Service() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="mx-16 my-4">
      <div className="home-service-title relative mt-8 mx-4">
        Dịch Vụ Nổi Bật
      </div>
      <Slider {...settings}>
        {services.map(function (service, index) {
          return (
            <Link to="/service" key={index}>
              <div className="p-4">
                <div
                  className="card-service w-full rounded-lg overflow-hidden"
                  key={index}
                >
                  <img
                    className="lg:h-68 md:h-48 w-full rounded-t-lg object-cover hover:opacity-90"
                    src={`./images/img${index + 1}.png`}
                    alt="dịch vụ"
                  />
                  <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                    <h1 className="text-xl font-semibold mb-3">
                      {service.title}
                    </h1>
                    <p className="service-description text-justify leading-relaxed mb-3 overflow-hidden">
                      {service.description}
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <Link
                        to="/service"
                        className="text-gray-400 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Xem thêm...
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
}
