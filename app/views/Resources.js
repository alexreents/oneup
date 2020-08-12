import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Main from "../layouts/Main";

import Cell from "../components/Resources/Cell";
import data from "../data/resources";

const Resources = () => (
  <Main>
    <Helmet title="Resources" />
    <article className="post" id="resources">
      <header>
        <div className="title">
          <h2>
            <Link to="/resources">Resources</Link>
          </h2>
          <p>
            A collection of resources about building a business that we&apos;ve
            found helpful
          </p>
        </div>
      </header>
      {data.map((article) => (
        <Cell data={article} key={article.title} />
      ))}
    </article>
  </Main>
);

export default Resources;
