import React from "react";
import './styles.css'

const Aside = ({ background }) => {
  const arrowImageSrc = "arrowDash.png";

  const titles = [
    { title: "Dashboard", altText: "Dashboard Icon" },
    { title: "New admission", altText: "New Admission Icon" },
    { title: "Individual", altText: "Individual Icon" },
    { title: "Corporate", altText: "Corporate Icon" },
    { title: "Application", altText: "Application Icon" },
    { title: "Status roles", altText: "Status Roles Icon" },
  ];

  return (
    <aside className={`aside ${background}`}>
      <div className="files-icon">
        {titles.map((item, index) => (
          <div key={index}>
            <img src={arrowImageSrc} alt="Arrow Icon" />
            <img src="dashIcon.png" alt={item.altText} />
          </div>
        ))}
      </div>
      <ul className="title-list">
        {titles.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
