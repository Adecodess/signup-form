import React from "react";
import { Link } from "react-router-dom";
import useForm from "./useForm";

const Login = () => {
  const { handleChange, person, handleSubmit, userData } = useForm();
  return (
    <main>
      <h3>healthcare</h3>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            className="form-input"
            value={person.username}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            className="form-input"
            value={person.password}
            onChange={handleChange}
          />
        </div>
        <button className="sign-btn" type="submit">
          Sign Up
        </button>
        <Link
          to={userData.username && userData.password ? "/dashboard" : "/login"}
          className="log-btn"
        >
          <span>Already have an account? </span> Log in
          {!userData && "error"}
        </Link>
      </form>
    </main>
  );
};

export default Login;
