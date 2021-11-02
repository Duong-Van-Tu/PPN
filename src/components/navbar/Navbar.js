import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "./Navbar.css";
const Navbar = () => {
  const [languageList, setLanguageList] = useState("");
  const [formLogin, setFormLogin] = useState("");
  const [navbar, setNavbar] = useState("");
  const handleShowLanguageListClick = () => {
    languageList === "" ? setLanguageList("active") : setLanguageList("")
  }
  const handleShowFormClick = () => {
    formLogin === "" ? setFormLogin("active") : setFormLogin("")
  }

  const handleShowNavBar = () => {
    navbar === "" ? setNavbar("active") : setNavbar("")
  }
  useEffect(() => {
    const languageListTimeout = setTimeout(() => {
      setLanguageList("")
    }, 5000)

    return () => {
      clearTimeout(languageListTimeout)
    }
  })
 
// window.onscroll = () =>{
//     loginForm.classList.remove('active');
//     navbar.classList.remove('active');

//     if(window.scrollY > 0){
//         $('.header').classList.add('active');
//     }else{
//         $('.header').classList.remove('active');
//     }
// }

// window.onload = () =>{
//     if(window.scrollY > 0){
//         $('.header').classList.add('active');
//     }else{
//         $('.header').classList.remove('active');
//     }
// }

  return (
    <header className="header active">
  <Link to="/" className="logo"> <img src="./images/logo.png" alt="" /></Link>
  <div className="header__right">
    <div className="header__right-top">
      <div className="header__hotline">
        <span>Hotline: </span> <a href="tel:0902999000">0902999000</a>
      </div>
      <div className="header__language">
        <button className="header__language-btn" onClick={handleShowLanguageListClick}>
          <img src="./images/vi-vn.png" width={20} alt="" />
          <i className="fas fa-sort-down" />
        </button>
        <div className={`language__list ${languageList}`}>
          <div className="language__item">
            <img src="./images/vi-vn.png" alt="" />
            <span>Việt Nam</span>
          </div>
          <div className="language__item">
            <img src="./images/en-gb.png" alt="" />
            <span>English</span>
          </div>
        </div>
      </div>
    </div>
    <div className="header__right-bottom">
      <nav className={`navbar ${navbar}`}>
        <Link className="navbar__link" to="/" onClick={handleShowNavBar}><i className="fad fa-home-alt" />Home</Link>
        <Link className="navbar__link" to="/about" onClick={handleShowNavBar}><i className="fad fa-id-card" />Về Chúng Tôi</Link>
        <Link className="navbar__link" to="/service" onClick={handleShowNavBar}><i className="fab fa-servicestack" />Dịch Vụ</Link>
        <a className="navbar__link" href="#contact" onClick={handleShowNavBar}><i className="fad fa-user-md-chat" />Nhận Tư Vấn</a>
        <Link className="navbar__link" to="/" onClick={handleShowNavBar}><i className="fas fa-newspaper" />Tin Tức</Link>
      </nav>
      <div className="icons">
        <div className="fas fa-bars" id="menu-btn" onClick={handleShowNavBar} />
        <div className="fas fa-user" id="login-btn" onClick={handleShowFormClick}/>
      </div>
      <form action className={`login-form ${formLogin}`}>
        <h3>Đăng Nhập</h3>
        <input type="email" name placeholder="Nhập email của bạn" id className="box" />
        <input type="password" name placeholder="Nhập mật khẩu của bạn" id className="box" />
        <div className="remember">
          <input type="checkbox" name id="remember-me" />
          <label htmlFor="remember-me">Nhớ mật khẩu</label>
        </div>
        <input type="submit" value="Đăng Nhập" className="btn" />
        <div className="links">
          <a href="#">Quên mật khẩu</a>
          <a href="#">Đăng ký</a>
        </div>
      </form>
    </div>
  </div>
</header>

  );
};

export default Navbar;
