import React, { useEffect } from "react";
import Banner from "../components/banner/Banner";
import Service from "../components/service/Service";
import AboutUs from "../components/about/AboutUs";
import Contact from "../components/contact/Contact";
import News from "../components/news/News";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <Banner></Banner>
      <Service></Service>
      <AboutUs></AboutUs>
      <div className="mx-8 my-8">
        <Contact></Contact>
      </div>
      <News></News>
    </div>
  );
};

export default Home;
