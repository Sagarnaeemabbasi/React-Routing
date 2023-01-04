import React from "react";
import { useLocation, useNavigate } from "react-router";
import { Route, Router, Routes } from "react-router";
import { Link } from "react-router-dom";
import Feedback from "../DashBoard/Feedback";
import Messages from "../DashBoard/Messages";
import Notifications from "../DashBoard/Notifications";

export default function About() {
  let location = useLocation();
  let navigate = useNavigate();
  let clickHandler = () => {
    navigate("/");
  };
  return (
    <div className="backGound">
      <h1 style={{ color: "red",display:"inline" }}>This is About</h1>
      <br />
      <button onClick={clickHandler}>Go to Home</button>
      <div className="AboutRoutes">
        <Link className="insideAboutRoutes" to="Feedback">Feedback</Link>
        <br />
        <Link className="insideAboutRoutes" to="Messages">Messages</Link>
        <br />
        <Link className="insideAboutRoutes" to="Notifications">Notifications</Link>
        <br />
      </div>
      <Routes>
        <Route path="Feedback" element={<Feedback />} />
        <Route path="Messages" element={<Messages />} />
        <Route path="Notifications" element={<Notifications />} />
      </Routes>
    </div>
  );
}
