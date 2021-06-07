import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import useForm from "./useForm";
import validate from "./validateInfo";

const Signup = () => {
  const { handleChange, person, handleSubmit, errors, userData } =
    useForm(validate);
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
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
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            className="form-input"
            value={person.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
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
          {errors.password && <p>{errors.password}</p>}
        </div>
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
      </form>
    </main>
  );
};

export default Signup;
