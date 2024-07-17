// src/components/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import EmployeeDetail from "./component/EmployeeDetail";
import { EmployeeProvider } from "./component/EmployeeContext"; // Adjust the path if needed

const App = () => {
  return (
    <Router>
      <EmployeeProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employee/:id" element={<EmployeeDetail />} />
        </Routes>
      </EmployeeProvider>
    </Router>
  );
};

export default App;
