// Aside.js
import React from 'react';

const Aside = () => {
  return (
    <aside style={{width:'256px', height:'1024px',  background: '#5F799E'}}>
      <div className="files-icon"> {/* Add CSS styling for the icon */}
        {/* Add your files icon here */}
      </div>
      <ul className="title-list"> {/* Add CSS styling for the list */}
       <li>Dashboard</li>
        <img src="dashIcon.png" alt="Dashboard Icon" /> 
       <li>New admission</li>
        <img src="dashIcon.png" alt="New admission"/>
       <li>Individual</li>
        <img src="dashIcon.png" alt="Individual"/> 
       <li>Corporate</li>
        <img src="dashIcon.png" alt="Corporate"/> 
       <li>Application</li>
        <img src="dashIcon.png" alt="Application"/> 
       <li>Status roles</li>
        <img src="dashIcon.png" alt="Status roles"/> 
      </ul>
    </aside>
  );
};

export default Aside;
