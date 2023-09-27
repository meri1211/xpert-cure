// CompanyDetails.js
import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import NotificationAndProfile from "./ReusableComp/NotificationAndProfile";
import Aside from "./Aside";
import SaveButton from "./SaveButton";

const CompanyDetails = () => {
  const companyDetailsItems = [
    "New Admission",
    "Company Details",
  ]; /* Array of items for the Company Details Nav page(Nav li items)*/

  return (
    <div classname="main-container">
      <Header>
        <Nav items={companyDetailsItems} /> {/* Pass the items prop */}
        <NotificationAndProfile />
      </Header>
      <Aside />
      <SaveButton />
    </div>
  );
};

export default CompanyDetails;
