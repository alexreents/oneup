import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Main from "../layouts/Main";

const Meetings = () => (
  <Main>
    <Helmet title="Meetings" />
    <article className="post" id="meetings">
      <header>
        <div className="title">
          <h2>
            <Link to="/meetings">Meetings</Link>
          </h2>
        </div>
      </header>
    </article>
  </Main>
);

export default Meetings;
