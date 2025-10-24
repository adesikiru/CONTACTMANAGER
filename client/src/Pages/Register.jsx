import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/CSS/form.css";
import Validation from "../Components/Validation";
import axios from 'axios'
const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errrs = Validation(values);
    setErrors(errrs);
    if(errors.name === '' && errors.password === '' && errors.email === ''){
      
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h2> Create Account</h2>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            onChange={handleInput}
            type="text"
            name="name"
            id=""
            placeholder="Enter Name"
            className="form-control"
          />
          {
            errors.name && <i className="form-error">{errors.name}</i>
          }
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            onChange={handleInput}
            type="email"
            name="email"
            id=""
            placeholder="Enter Email"
            className="form-control"
            autoComplete="off"
          />
          {
            errors.email && <i className="form-error">{errors.email}</i>
          }
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password :
          </label>
          <input
            onChange={handleInput}
            type="password"
            name="password"
            id=""
            placeholder="* * * * * *"
            className="form-control"
            autoComplete="off"
          />
          {
            errors.password && <i className="form-error">{errors.password}</i>
          }
        </div>
        <button type="submit" className="form-btn">
          Register
        </button>
        <p>
          {" "}
          Already have an account? <Link to="/login">Login</Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Register;
