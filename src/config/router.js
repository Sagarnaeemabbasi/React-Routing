import { List } from "@mui/material";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Services from "../components/Services";

export default function AppRouter() {
  return (
    <Router>
      <div className="Navbar">
        <Link className="insideNavbar" to="/">Home</Link>
        <Link className="insideNavbar" to="Services">Services</Link>
        <Link className="insideNavbar" to="About">About</Link>
        <Link className="insideNavbar" to="Contact">Contact</Link>
      </div>
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Services" element={<Services />} />
          <Route path="About/*" element={<About />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}