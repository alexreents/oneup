import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Main from "../layouts/Main";

import Cell from "../components/Articles/Cell";
import data from "../data/articles";

const Articles = () => (
  <Main>
    <Helmet title="Articles" />
    <article className="post" id="articles">
      <header>
        <div className="title">
          <h2>
            <Link to="/articles">In the News</Link>
          </h2>
          <p>Some articles about economics that we&apos;ve found interesting</p>
        </div>
      </header>
      {data.map((article) => (
        <Cell data={article} key={article.title} />
      ))}
    </article>
  </Main>
);

export default Articles;
