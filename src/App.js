// App.js
import "./App.css";
import React from "react";
/*import { Router, Route, Switch } from "react-router-dom";*/
import { Route, Routes } from "react-router-dom";
import PersonalInfo from "./PersonalInfo"; // Import the PersonalInfo component
import CompanyDetails from "./CompanyDetails"; // Import the CompanyDetails component
import './styles.css'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PersonalInfo />} />
      <Route path="/company" element={<CompanyDetails />} />
    </Routes>
  );
};

export default App;
