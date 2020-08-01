import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Main from "../layouts/Main";

import Cell from "../components/Research/Cell";
import data from "../data/research";

const Research = () => (
  <Main>
    <Helmet title="Research" />
    <article className="post" id="research">
      <header>
        <div className="title">
          <h2>
            <Link to="/research">Economic Research at SCU</Link>
          </h2>
          <p>
            A collection of some interesting research by economics professors at
            Santa Clara
          </p>
        </div>
      </header>
      {data.map((research) => (
        <Cell data={research} key={research.title} />
      ))}
    </article>
  </Main>
);

export default Research;
