import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const EmployeeCard = ({ employee, onDelete }) => {
  return (
    <div className="employee-card">
      <Link
        to={{
          pathname: `/employee/${employee.id}`,
          state: { employee },
        }}
      >
        <h3>{employee.employee_name}</h3>
        <p>Age: {employee.employee_age}</p>
        <p>Salary: {employee.employee_salary}</p>
      </Link>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(employee.id);
        }}
      >
        Delete
      </button>
      <button>Edit</button>
    </div>
  );
};

export default EmployeeCard;
