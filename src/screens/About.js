import React, { useEffect, useState } from "react";
import { services } from "../data/data";
import Contact from "../components/contact/Contact";
import AboutUs from "../components/about/AboutUs";
import BannerService from "../components/banner/BannerService";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      offset: 400, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
    });
  }, []);

  return (
    <div className="about">
      <BannerService></BannerService>
      <AboutUs></AboutUs>
      <Contact></Contact>
    </div>
  );
};

export default About;
