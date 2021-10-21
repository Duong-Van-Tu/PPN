import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Contact.css";
import { employees } from "../../data/data";

const Contact = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full">
      <div className="home-contact-title ml-8 relative">Hỗ Trợ Khách Hàng</div>
      <Slider {...settings}>
        {employees.map(function (employee, index) {
          return (
            <div key={index}>
              <div className="py-4 px-6">
                <div className="card">
                  <span className="close" />
                  <span className="arrow" />
                  <article className="home-contact-article">
                    <h2>{employee.name}</h2>
                    <div className="title">{employee.position}</div>
                    <div className="pic">
                      <img src={`${employee.image}`} alt="" />
                    </div>
                    <div className="desc">
                      <a
                        href={`tel:${employee.phoneNumber}`}
                        className="desc-phone block p-1"
                      >
                        <i className="fad fa-phone-square px-2"></i>
                        {employee.phoneNumber}
                      </a>
                      <a
                        href={`mailto:${employee.email}`}
                        className="desc-mail block p-1"
                      >
                        <i className="fad fa-envelope px-2"></i>
                        {employee.email}
                      </a>
                    </div>
                  </article>
                  <div className="home-contact-actions">
                    <a
                      href={`https://zalo.me/${employee.zalo}`}
                      className="btn"
                      target="_blank"
                    >
                      <span>zalo</span>
                      <img className="icon" src="./images/zalo.png" alt="" />
                    </a>

                    <a href={`tel:${employee.phoneNumber}`} className="btn">
                      <span>Telephone</span>
                      <img className="icon" src="./images/phone.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Contact;
