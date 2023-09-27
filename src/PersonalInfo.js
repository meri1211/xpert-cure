// PersonalInfo.js

import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import NotificationAndProfile from "./ReusableComp/NotificationAndProfile";
import Aside from "./Aside";
import SaveButton from "./SaveButton";

const PersonalInfo = () => {
  const personalDetailsItems = [
    "Dashboard",
    "Add individual",
    "Medical declaration",
  ]; /* Array of items for Nav li, so that we can map through them and list them as they appear in each nav, on page*/

  return (
    <div classname="main-container">
      <Header>
        <Nav items={personalDetailsItems} /> {/* Pass the items prop */}
        <NotificationAndProfile />
      </Header>
      <Aside />
      <SaveButton />
    </div>
  );
};

export default PersonalInfo;
