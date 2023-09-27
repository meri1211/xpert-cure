// Aside.js
import React from 'react';

const Aside = ({ titles, selectedTitle, onSelectTitle }) => {
  return (
    <aside style={{width:'256px', height:'1024px',  background: '#5F799E'}}>
      <div className="files-icon"> {/* Add CSS styling for the icon */}
        {/* Add your files icon here */}
      </div>
      <ul className="title-list"> {/* Add CSS styling for the list */}
        {titles.map((title) => (
          <li
            key={title}
            onClick={() => onSelectTitle(title)}
            className={title === selectedTitle ? 'selected' : ''}
          >
            {title}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
