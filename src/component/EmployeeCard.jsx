// src/components/EmployeeCard.js
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import icon_img from "./img_icon.png";

const EmployeeCard = ({ employee, onDelete }) => {
  return (
    <Link
      to={`/employee/${employee.id}`}
      state={employee}
      className="employee-card-link"
    >
      <div className="employee-card">
        <div className="left-img">
          <img src={icon_img} alt={employee.employee_name} />
        </div>
        <div className="right-info">
          <h3 className="emp-name">{employee.employee_name}</h3>
          <p>ID: {employee.id}</p>
          <p>Age: {employee.employee_age}</p>
          <p>Salary: {employee.employee_salary}</p>
        </div>
        <div className="card-buttons">
          <button
            onClick={(e) => {
              e.preventDefault();
              onDelete(employee.id);
            }}
          >
            Delete
          </button>
          <button>Edit</button>
        </div>
      </div>
    </Link>
  );
};

export default EmployeeCard;
