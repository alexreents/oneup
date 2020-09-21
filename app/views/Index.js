import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">OneUp Entrepreneurship Organization</Link>
          </h2>
          <p>Santa Clara University</p>
        </div>
      </header>
      <p>
        Thanks for your interest in OneUp SCU! We're currently building out our
        site to include information about upcomding projects, general
        initiatives, future meetings, resources for entrepreneurs, and more! In
        the meantime, please feel free to{" "}
        <a href={"mailto:oneupscu@gmail.com"}>
          <span>reach out to us with any questions!</span>
        </a>
      </p>
      <p>
        <a href="http://eepurl.com/dFBqXT">
          <span>
            Sign up to recieve important club updates and to submit your name to
            our build-a-thon program (non-binding)!
          </span>
        </a>
      </p>
      <p>
        <a href="https://us19.list-manage.com/survey?u=f4fe52f5efff8d28059493785&id=c32277e1ca">
          <span>
            Have an idea that you'd like to see built? Submit your
            product/service here for us to review!{" "}
          </span>
        </a>
      </p>
    </article>
    <a className="image">
      <img className="index-photo" src="images/planner.jpg" alt=""></img>
    </a>
  </Main>
);

export default Index;

//<p>
//  <Link to="/about">Learn about us, </Link>{" "}
//  <Link to="/projects">our projects,</Link>{" "}
//  <Link to="/resources">some helpful entreprenuerial resources,</Link>{" "}
//  <Link to="/meetings">our meetings</Link>, and{" "}
//  <Link to="/contact">get involved!</Link>
//</p>;
