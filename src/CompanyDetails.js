// CompanyDetails.js
import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import NotificationAndProfile from "./ReusableComp/NotificationAndProfile";
import Aside from "./Aside";
import SaveButton from "./SaveButton";

const CompanyDetails = () => {
  /* Array of items for the Company Details Nav page(Nav li items)*/
  const companyDetailsItems = ["New Admission", "Company Details"];
  const [selectedTitle, setSelectedTitle] = useState("");
  const titles = [
    "Dashboard",
    "New admission",
    "Individual",
    "Corporate",
    "Application",
    "Status roles",
  ];

  return (
    <div classname="main-container">
      <Header>
        <Nav items={companyDetailsItems} /> {/* Pass the items prop */}
        <NotificationAndProfile />
      </Header>
      <Aside
        titles={titles}
        selectedTitle={selectedTitle}
        onSelectTitle={setSelectedTitle}
      />
      <SaveButton />
    </div>
  );
};

export default CompanyDetails;
