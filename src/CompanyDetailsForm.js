// form component for the company details page
import React, { useState } from "react";

const CompanyDetailsForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    address: "",
    hrMobileNumber: "",
    hrEmail: "",
    dateOfJoining: "",
    designation: "",
    employeeIdFile: null,
    department: "",
    noticePeriod: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === "file" ? files[0] : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  return (
    <form className="formCompany">
      <div>
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="hrMobileNumber">HR Mobile Number:</label>
        <input
          type="tel"
          id="hrMobileNumber"
          name="hrMobileNumber"
          value={formData.hrMobileNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="hrEmail">HR Email Id:</label>
        <input
          type="email"
          id="hrEmail"
          name="hrEmail"
          value={formData.hrEmail}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="dateOfJoining">Date of Joining:</label>
        <input
          type="date"
          id="dateOfJoining"
          name="dateOfJoining"
          value={formData.dateOfJoining}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="designation">Designation:</label>
        <input
          type="text"
          id="designation"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="employeeIdFile">Upload Employee Id:</label>
        <input
          type="file"
          id="employeeIdFile"
          name="employeeIdFile"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="department">Department:</label>
        <input
          type="text"
          id="department"
          name="department"
          value={formData.department}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>Are you on a notice period?</p>
        <label>
          <input
            type="radio"
            name="noticePeriod"
            value="yes"
            onChange={handleChange}
          />{" "}
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="noticePeriod"
            value="no"
            onChange={handleChange}
          />{" "}
          No
        </label>
      </div>
    </form>
  );
};

export default CompanyDetailsForm;
