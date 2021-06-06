import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="container">
      <article>
        <h1>evon</h1>
        <p>discover upcoming events new you</p>
        <div className="btn-container">
          <Link to="/signup" className="signup-btn">
            Sign Up
          </Link>{" "}
          <br />
          <br />
          <Link to="/login" className="login-btn">
            Log in
          </Link>
        </div>
        <button>skip for now</button>
      </article>
    </main>
  );
};

export default Home;
