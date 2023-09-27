// App.js
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PersonalInfo from "./PersonalInfo"; // Import the PersonalInfo component
import CompanyDetails from "./CompanyDetails"; // Import the CompanyDetails component

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={PersonalInfo} />
        <Route path="/company" component={CompanyDetails} />
      </Switch>
    </Router>
  );
};

export default App;
