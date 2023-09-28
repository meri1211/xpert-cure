// CompanyDetails.js
//import React from "react";
//import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import Nav from "./Nav";
import Header from "./Header";
import NotificationAndProfile from "./NotificationAndProfile";
import Aside from "./Aside";
import SaveButton from "./SaveButton";

const CompanyDetails = () => {
  /* Array of items for the Company Details Nav page(Nav li items)*/
  const companyDetailsItems = ["New Admission", "Company Details"];
  /*const [selectedTitle, setSelectedTitle] = useState("");
  const titles = [
    "Dashboard",
    "New admission",
    "Individual",
    "Corporate",
    "Application",
    "Status roles",
  ];*/

  return (
    <div
      className="main-container"
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        background: "white",
      }}
    >
      <div
        className="formDiv"
        style={{ width: "1440px", height: "1024px", background: "white" }}
      >
        <Header>
          <Nav items={companyDetailsItems} /> {/* Pass the items prop */}
          <NotificationAndProfile />
        </Header>
        <Aside
        /*titles={titles}
        selectedTitle={selectedTitle}
        onSelectTitle={setSelectedTitle}*/
        />
        <SaveButton />
      </div>
    </div>
  );
};

export default CompanyDetails;
