// src/context/EmployeeContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    if (employees.length === 0) {
      axios
        .get("https://dummy.restapiexample.com/api/v1/employees")
        .then((response) => {
          if (response.status === 200) {
            setEmployees(response.data.data);
            setFilteredEmployees(response.data.data);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [employees]);

  const handleSearch = (id) => {
    if (id) {
      const filtered = employees.filter(
        (employee) => employee.id === parseInt(id)
      );
      setFilteredEmployees(filtered);
    } else {
      setFilteredEmployees(employees);
    }
  };

  const handleDelete = (id) => {
    setFilteredEmployees(
      filteredEmployees.filter((employee) => employee.id !== id)
    );
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        filteredEmployees,
        handleSearch,
        handleDelete,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
