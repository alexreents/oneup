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
        {" "}
        Santa Clara University <Link to="/about">About Us</Link>,{" "}
        <Link to="/articles">articles</Link>, view{" "}
        <Link to="/stats">site statistics</Link>, or{" "}
        <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
