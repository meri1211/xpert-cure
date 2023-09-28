import React, { useState } from "react";
import Nav from "./Nav";
import Header from "./Header";
import NotificationAndProfile from "./NotificationAndProfile";
import Aside from "./Aside";
import SaveButton from "./SaveButton";
import { Link } from "react-router-dom";
import "./App.css";
import "./styles.css";

const PersonalInfo = () => {
  /* Array of items for Nav li, so that we can map through them and list them as they appear in each nav, on page*/
  const personalDetailsItems = [
    "Dashboard",
    "Add individual",
    "Medical declaration",
  ];

  return (
    <div className="main-container">
      <Header>
        <Nav items={personalDetailsItems} />
        <NotificationAndProfile />
      </Header>
      <Aside />
      <div className="formDivPersonal">
        <form className="formPersonal">
          <Link to="/company">
            <SaveButton />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
