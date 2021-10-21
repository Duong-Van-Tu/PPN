import React from "react";
import { Link } from "react-router-dom";
import "./PhoneAndZalo.css"
const PhoneAndZalo = () => {
  return (
    <div className="zalo-phone fixed w-16 h-16">
      <a href="https://zalo.me/0773641222" target="_blank">
        <img
          className="zalo-img w-full rounded-full"
          src="./images/zalo.png"
          alt=""
        />
      </a>
      <div
        className="phonering-alo-phone phonering-alo-green phonering-alo-show"
        id="phonering-alo-phoneIcon"
      >
        <div className="phonering-alo-ph-circle" />
        <div className="phonering-alo-ph-circle-fill" />
        <a href="tel:0902999000" className="pps-btn-img" title="Liên hệ">
          <div className="phonering-alo-ph-img-circle" />
        </a>
      </div>
    </div>
  );
};

export default PhoneAndZalo;
