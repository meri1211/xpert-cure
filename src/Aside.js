// Aside component that renders the dashboard titles along with the icons
import React from "react";
import "./styles.css";

const Aside = ({ titlesWithBackground }) => {
  const arrowImageSrc = "./arrowDash.png";

  const titles = [
    { title: "Dashboard", altText: "Dashboard Icon" },
    { title: "New admission", altText: "New Admission Icon" },
    { title: "Individual", altText: "Individual Icon" },
    { title: "Corporate", altText: "Corporate Icon" },
    { title: "Application", altText: "Application Icon" },
    { title: "Status roles", altText: "Status Roles Icon" },
  ];
  
  return (
    <aside className="aside">
      <div className="logo">
        <img src="./XpertLogo.png" />
      </div>
      <div className="files-icon">
        {titles.map((item, index) => (
          <div
            key={index}
            className={
              titlesWithBackground.includes(item.title) ? "with-background" : ""
            }
          >
            <img src={arrowImageSrc} alt="Arrow Icon" />
            <img src="./dashIcon.png" alt={item.altText} />
          </div>
        ))}
      </div>
      <ul className="title-list">
        {titles.map((item, index) => (
          <li
            key={index}
            className={
              titlesWithBackground.includes(item.title) ? "with-background" : ""
            }
          >
            {item.title}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
