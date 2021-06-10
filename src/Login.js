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
          {userData.username && <p>username does not match</p>}
          <p></p>
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
          {userData.password && <p>username does not match</p>}
        </div>

        <Link
          to={userData.username && userData.password ? "/admin" : "/signup"}
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
