import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Main from "../layouts/Main";

import data from "../data/contact";

const Contact = () => {
  return (
    <Main>
      <Helmet title="Contact" />
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2>
              <Link to="/contact">Contact</Link>
            </h2>
          </div>
        </header>
        <div className="email-at">
          <p>Feel free to get in touch. You can email us at: </p>
          <a href={"mailto:oneupscu@gmail.com"}>
            <span>oneupscu@gmail.com</span>
          </a>
        </div>
        <a href="http://eepurl.com/dFBqXT">
          <span>Sign up here to recieve important club updates!</span>
        </a>
        <br></br>
        <br></br>
        <a href="https://us19.list-manage.com/survey?u=f4fe52f5efff8d28059493785&id=c32277e1ca">
          <span>
            Have an idea that you'd like to see built? Submit your
            product/service here for us to review!{" "}
          </span>
        </a>
        <ul className="icons">
          <br></br>
          {data.map((s) => (
            <li key={s.label}>
              <a href={s.link}>
                <FontAwesomeIcon icon={s.icon} />
              </a>
            </li>
          ))}
        </ul>
      </article>
    </Main>
  );
};

export default Contact;
