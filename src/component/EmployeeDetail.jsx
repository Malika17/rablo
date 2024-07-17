// src/components/EmployeeDetail.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import img_icon from "./img_icon.png";

const EmployeeDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, employee_name, employee_age, employee_salary, profile_image } =
    location.state;

  return (
    <div className="employee-detail-container">
      <button className="go-back-button" onClick={() => navigate("/")}>
        Go to Dashboard
      </button>
      <h1 className="details">Employee Details</h1>
      <p className="page-description">
        This page provides detailed information about the selected employee. You
        can review the employee's profile picture, name, age, and salary.
      </p>

      <div className="employee-info">
        <img
          src={img_icon}
          alt={employee_name}
          className="employee-profile-image"
        />
        <div className="employee-data">
          <h2>{employee_name}</h2>
          <p>ID: {id}</p>
          <p>Age:{employee_age}</p>
          <p>Salary:${employee_salary}</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
