// PersonalInfo.js

import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import NotificationAndProfile from "./ReusableComp/NotificationAndProfile";
import Aside from "./Aside";
import SaveButton from "./SaveButton";
import { useHistory } from "react-router-dom";
import SaveButton from "./SaveButton";

const PersonalInfo = () => {
  /* Array of items for Nav li, so that we can map through them and list them as they appear in each nav, on page*/
  const personalDetailsItems = [
    "Dashboard",
    "Add individual",
    "Medical declaration",
  ];
  const history = useHistory();
  const [selectedTitle, setSelectedTitle] = useState("");
  const titles = [
    "Dashboard",
    "New admission",
    "Individual",
    "Corporate",
    "Application",
    "Status roles",
  ];
  const handleSaveAndContinue = () => {
    // Redirect to the CompanyDetails page
    history.push("/company");

    return (
      <div classname="main-container">
        <Header>
          <Nav items={personalDetailsItems} />
          <NotificationAndProfile />
        </Header>
        <Aside
          titles={titles}
          selectedTitle={selectedTitle}
          onSelectTitle={setSelectedTitle}
        />
        <SaveButton onClickCallback={handleSaveAndContinue} />
      </div>
    );
  };
};

export default PersonalInfo;
