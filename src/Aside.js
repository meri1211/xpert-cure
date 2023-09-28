// Aside.js
import React from "react";
import './styles.css'

const Aside = () => {
  return (
    <aside classnName="aside">
      <div className="files-icon">
        <img src="dashIcon.png" alt="Dashboard Icon" />
        <img src="dashIcon.png" alt="New admission" />
        <img src="dashIcon.png" alt="Individual" />
        <img src="dashIcon.png" alt="Corporate" />
        <img src="dashIcon.png" alt="Application" />
        <img src="dashIcon.png" alt="Status roles" />
      </div>
      <ul className="title-list">
        <li>Dashboard</li>
        <li>New admission</li>
        <li>Individual</li>
        <li>Corporate</li>
        <li>Application</li>
        <li>Status roles</li>
      </ul>
    </aside>
  );
};

export default Aside;
