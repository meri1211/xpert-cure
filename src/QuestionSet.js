// creating a question set component that i will import into a form component
// QuestionSet.js
import React from "react";

const QuestionSet = ({ yesNoQuestion, dropdownQuestion, options }) => {
  return (
    <div className="questionSet">
      <p>{yesNoQuestion}</p>
      <div className="radioButtons">
        <label>
          <input type="radio" name="yesNoAnswer" value="yes" /> Yes
        </label>
        <label>
          <input type="radio" name="yesNoAnswer" value="no" /> No
        </label>
      </div>
      <p>{dropdownQuestion}</p>
      <label>
        Select an option:
        <select>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default QuestionSet;