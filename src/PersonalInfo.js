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
        <h1>Medical declaration</h1>
        <form className="formPersonal">
          <div className="questionSet">
            <p>Does the pacient drink alcohol?</p>
            <label>
              <input type="radio" name="answer" value="yes" /> Yes
            </label>
            <label>
              <input type="radio" name="answer" value="no" /> No
            </label>
            <p>How many times a week?</p>
            <label>
              Select an option:
              <select>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </label>
          </div>
        </form>
        <Link to="/company">
          <SaveButton />
        </Link>
      </div>
    </div>
  );
};

export default PersonalInfo;
