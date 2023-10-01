// SaveButton.js
import React from 'react';
import "./styles.css";

const SaveButton = ({ onClickCallback }) => {
  return (
    <button onClick={onClickCallback}>Save and Next</button>
  );
};

export default SaveButton;