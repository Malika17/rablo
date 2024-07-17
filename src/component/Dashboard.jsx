// src/components/Dashboard.js
import React, { useContext } from "react";
import { EmployeeContext } from "./EmployeeContext";
import EmployeeCard from "./EmployeeCard";
import Search from "./Search";
import Header from "./Header";
import "../App.css";

const Dashboard = () => {
  const { filteredEmployees, handleSearch, handleDelete } =
    useContext(EmployeeContext);

  return (
    <div className="dashboard-home">
      <Header />
      <div className="search-btn-position">
        <Search onSearch={handleSearch} />
      </div>
      <div className="employee-cards">
        {filteredEmployees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
