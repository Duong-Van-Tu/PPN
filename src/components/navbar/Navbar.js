import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "./Navbar.css";
const Navbar = () => {
  const [showLanguage, setShowLanguage] = useState("hidden");
  const [active, setActive] = useState("");
  const handleshowLanguage = () => {
    showLanguage === "hidden"
      ? setShowLanguage("navbar__list-language")
      : setShowLanguage("hidden");
  };

  useEffect(() => {
    const timeOutShowLanguage = setTimeout(() => {
      setShowLanguage("hidden");
    }, 5000);

    return () => {
      clearTimeout(timeOutShowLanguage);
    };
  });

  return (
    <div className="navbar bg-white fixed top-0 left-0 right-0 flex items-center justify-between px-4 pt-4 py-2 shadow-sm ">
      <div className="navbar__left mr-20">
        <Link to="/">
          <img className="w-96" src="./images/logo.png" alt="logo" />
        </Link>
      </div>
      <div className="navbar__right flex-1">
        <div className="navbar__right-info flex justify-end relative">
          <div className="navbar__info-item flex relative">
            <div className="navbar_hotline px-8">
              Hotline:
              <a
                href="tel:0977773553"
                className="navbar__info-link hover:text-green-600 "
              >
                {" "}
                0902999000
              </a>
            </div>
          </div>
          <button
            className="navbar__btn-language flex items-center bg-gray-200 py-1 px-2 rounded-lg hover:bg-gray-300"
            onClick={handleshowLanguage}
          >
            <img src="./images/vi-vn.png" width="20" alt="" />
            <i className="mx-0.5 fad fa-caret-down"></i>
          </button>
          {/* <button>
            <i class="fas fa-bars"></i>
          </button> */}
          <div
            className={`${showLanguage} absolute z-10 bg-gray-50 w-32 top-8 rounded-lg right-0 shadow`}
          >
            <div className="flex py-1 px-4 items-center cursor-pointer hover:bg-gray-200 rounded-t-lg">
              <img
                className="mr-2"
                src="./images/vi-vn.png"
                width="20"
                alt="vi-vn"
              />
              <span className="text-sm font-normal">Việt Nam</span>
            </div>
            <div className="flex items-center py-1 px-3 cursor-pointer hover:bg-gray-200 rounded-b-lg">
              <img
                className="mr-2"
                src="./images/en-gb.png"
                width="20"
                alt="en-gb"
              />
              <span className="text-sm font-normal">English</span>
            </div>
          </div>
        </div>
        <div className="navbar__menu-list md:flex flex-wrap justify-around items-center space-x-1">
          <Link
            to="/"
            className={`navbar__menu-link relative px-3 py-2 text-gray-700 hover:text-red-900 rounded-lg ${active}`}
          >
            <i className="fad fa-home"></i> Home
          </Link>
          <Link
            to="/service"
            className={`flex items-center navbar__menu-link relative px-3 py-2 hover:text-red-900 text-gray-700 hover:text-gray-900 ${active}`}
          >
            <i className="mr-0.5 fad fa-clone"></i>Dịch vụ
          </Link>

          {/* <Link
            to="/customer"
            className="navbar__menu-link relative px-3 py-2 hover:text-red-900 text-gray-700 hover:text-gray-900"
          >
            <i className="mr-0.5 fad fa-user-friends"></i>Trải nghiệm khách hàng
          </Link> */}
          <Link
            to="/about"
            className={`navbar__menu-link relative px-3 py-2 hover:text-red-900 text-gray-700 hover:text-gray-900`}
          >
            <i className="mr-0.5 fad fa-address-card"></i>Về chúng tôi
          </Link>
          <Link
            to="/price"
            className={`navbar__menu-link relative px-3 py-2 hover:text-red-900 text-gray-700 hover:text-gray-900`}
          >
            <i className="mr-0.5 fad fa-dollar-sign"></i>Báo giá
          </Link>
          <Link
            to="/news"
            className={`navbar__menu-link relative px-3 py-2 hover:text-red-900 text-gray-700 hover:text-gray-900`}
          >
            <i className="mr-0.5 fad fa-newspaper"></i>Tin tức
          </Link>
          {/* <Link
            to="/contact"
            className="navbar__menu-link relative px-3 py-2 hover:text-red-900 text-gray-700 hover:text-gray-900"
          >
            <i className="mr-0.5 fad fa-phone-square"></i>Liên hệ
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
