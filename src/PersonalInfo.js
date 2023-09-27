// PersonalInfo.js

import React, { useState } from "react";
import Nav from "./Nav";
import Header from "./Header";
import NotificationAndProfile from "./NotificationAndProfile";
import Aside from "./Aside";
//import { useHistory } from "react-router-dom";
import SaveButton from "./SaveButton";
import { Link } from "react-router-dom";

const PersonalInfo = () => {
  /* Array of items for Nav li, so that we can map through them and list them as they appear in each nav, on page*/
  const personalDetailsItems = [
    "Dashboard",
    "Add individual",
    "Medical declaration",
  ];
  /*const [selectedTitle, setSelectedTitle] = useState("");- tried to give props for the dashboard titles but it's not rendering so decided to just go with li
  const titles = [
    "Dashboard",
    "New admission",
    "Individual",
    "Corporate",
    "Application",
    "Status roles",
  ];*/
  const handleSaveAndContinue = () => {
    // Redirect to the CompanyDetails page
    history.push("/company");
  };

  return (
    <div className="main-container" style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>
      <Header>
        <Nav items={personalDetailsItems} />
        <NotificationAndProfile />
      </Header>
      <Aside
        /*titles={titles}
        selectedTitle={selectedTitle}
        onSelectTitle={setSelectedTitle}*/
      />
      <Link to="/company">
        <SaveButton onClickCallback={handleSaveAndContinue} />
      </Link>
    </div>
  );
};

export default PersonalInfo;
