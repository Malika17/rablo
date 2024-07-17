// src/components/Dashboard.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeCard from "./EmployeeCard";
import Search from "./Search";
import Header from "./Header";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        if (response.status === 200) {
          setEmployees(response.data.data);
          setFilteredEmployees(response.data.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (id) => {
    const filtered = employees.filter(
      (employee) => employee.id === parseInt(id)
    );
    setFilteredEmployees(filtered);
  };

  const handleDelete = (id) => {
    setFilteredEmployees(
      filteredEmployees.filter((employee) => employee.id !== id)
    );
  };

  return (
    <div>
      <Header />
      <Search onSearch={handleSearch} />
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
