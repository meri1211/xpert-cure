// SaveButton.js
import React from 'react';

const SaveButton = ({ onClickCallback }) => {
  return (
    <button onClick={onClickCallback}>Save and Next</button>
  );
};

export default SaveButton;