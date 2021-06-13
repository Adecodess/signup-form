import React from "react";
import { Link } from "react-router-dom";
import useForm from "./useForm";

const Login = () => {
  const { handleChange, person, handleSubmit, userData } = useForm();
  return (
    <main>
      <h3 className="login-title">ES healthcare</h3>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-form-control">
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            className="login-form-input"
            required
            value={person.username}
            onChange={handleChange}
          />
          {userData.username && <p>username does not match</p>}
        </div>

        <div className="login-form-control">
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            className="login-form-input"
            required
            value={person.password}
            onChange={handleChange}
          />
          {userData.password && <p>password does not match</p>}
        </div>

        <Link
          to={userData.username && userData.password ? "/dashboard" : "/signup"}
          className="log-btn"
        >
          <span>Already have an account? </span> Login
          {!userData && "error"}
        </Link>
      </form>
    </main>
  );
};

export default Login;
