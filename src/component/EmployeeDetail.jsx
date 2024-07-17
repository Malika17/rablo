import React from "react";
import { useLocation } from "react-router-dom";

const EmployeeDetail = () => {
  const location = useLocation();
  const employee = location.state?.employee; // Accessing the state
  console.log(employee);

  if (!employee) return <div>Employee data not available.</div>;

  return (
    <div>
      <h2>{employee.employee_name}</h2>
      <p>Age: {employee.employee_age}</p>
      <p>Salary: {employee.employee_salary}</p>
      <p>Profile Image: {employee.profile_image || "N/A"}</p>
    </div>
  );
};

export default EmployeeDetail;
