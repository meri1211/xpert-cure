// Header.js
import React from "react";
import Nav from "./Nav";
import NotificationAndProfile from "./NotificationAndProfile";

const Header = ({ navItems }) => {
  return (
    <header>
      <Nav items={navItems} />
      <NotificationAndProfile />
    </header>
  );
};

export default Header;
