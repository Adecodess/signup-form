import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <main className="home-container">
      <article className="home">
        <h1 className="home-title"> Welcome to ESHealthcare</h1>
        <div className="btn-container">
          <Link to="/signup" className="signin-btn">
            Sign in
          </Link>{" "}
        </div>
      </article>
    </main>
  );
};

export default Home;
