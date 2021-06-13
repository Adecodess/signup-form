import React, { useState } from "react";
import { Link } from "react-router-dom";
import useForm from "./useForm";
import validate from "./validateInfo";

const Signup = () => {
  const { handleChange, person, handleSubmit, errors, userData } =
    useForm(validate);

  return (
    <article className="signup-form">
      <form className="formm" onSubmit={handleSubmit}>
        <h3 className="signup-title">ES healthcare</h3>
        <div className="avatar">
          <img
            src="https://www.globalcincinnati.org/wp-content/uploads/2017/10/icon_membership_individual.png"
            alt="vatar"
          />
        </div>
        <div className="formm-control">
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            className="formm-input"
            required
            value={person.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="formm-control">
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            className="formm-input"
            required
            value={person.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="formm-control">
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            className="formm-input"
            required
            value={person.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div className="all-btn">
          <Link to="/signup">
            <button className="sbtn" type="submit">
              Sign Up
            </button>
          </Link>

          <Link
            to={userData.username && userData.password ? "/login" : "/signup"}
            className="log-btn"
          >
            <span>Already have an account? </span> Log in
            {!userData && "errors"}
          </Link>
        </div>
      </form>
    </article>
  );
};

export default Signup;
