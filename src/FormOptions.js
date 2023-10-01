// FormOptions.js- adding questions and answer options to the form of Personal Details
import React, { useState } from "react";
import QuestionSet from "./QuestionSet"; // Import the QuestionSet component

const FormOptions = () => {
  const [agree, setAgree] = useState(false);

  const handleAgreeChange = () => {
    setAgree(!agree);
  };
  return (
    <>
      <div>
        <QuestionSet
          yesNoQuestion="Does the patient drink alcohol?"
          dropdownQuestion="How many times a week?"
          options={["1/Week", "3/Week", "5/Week"]}
        />
      </div>
      <div>
        <QuestionSet
          yesNoQuestion="Does the patient smoke?"
          dropdownQuestion="How many a day?"
          options={["1/Day", "5/Day", "10/Day"]}
        />
      </div>
      <div>
        <QuestionSet
          yesNoQuestion="Does the patient have diabetes?"
          dropdownQuestion="When did it occur to you first?"
          options={["1 Month", "5 Months", "10 Months"]}
        />
      </div>
      <div>
        <QuestionSet
          yesNoQuestion="Does the patient have hypertension?"
          dropdownQuestion="When did it occur to you first?"
          options={["1 Month", "5 Months", "10 Months"]}
        />
      </div>
      <div>
        <QuestionSet yesNoQuestion="Have you declared these details with the insurer at the time of purchasing the policy?" />
      </div>
      <p>
        Do you agree to{" "}
        <a
          href="/terms-and-conditions"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms and conditions
        </a>
        ?
      </p>
      <label>
        <input type="checkbox" onChange={handleAgreeChange} /> I Agree
      </label>
    </>
  );
};

export default FormOptions;
