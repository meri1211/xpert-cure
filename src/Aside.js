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
