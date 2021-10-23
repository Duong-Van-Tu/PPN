import "./App.css";
import "../src/css/reponsive.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import PhoneAndZalo from "./components/phoneAndZalo/PhoneAndZalo";
import Footer from "./components/footer/Footer";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Customer from "./screens/Customer";
import News from "./screens/News";
import Service from "./screens/Service";
import Price from "./screens/Price";
import React from "react";
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <main className="main-wrap relative top-24">
        <PhoneAndZalo></PhoneAndZalo>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/customer">
            <Customer />
          </Route>
          <Route exact path="/news">
            <News />
          </Route>
          <Route exact path="/price">
            <Price />
          </Route>
          <Route exact path="/service">
            <Service />
          </Route>
        </Switch>
        <Footer></Footer>
      </main>
    </Router>
  );
}

export default App;
