import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">OneUp SCU</Link>
          </h2>
          <p>Santa Clara University</p>
        </div>
      </header>
      <p>
        <Link to="/about">Learn about us, </Link>{" "}
        <Link to="/projects">our projects,</Link>{" "}
        <Link to="/resources">some helpful entreprenuerial resources,</Link>{" "}
        <Link to="/meetings">our meetings</Link>, and{" "}
        <Link to="/contact">get involved!</Link>
      </p>
    </article>
  </Main>
);

export default Index;
