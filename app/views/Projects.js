import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Main from "../layouts/Main";

import Cell from "../components/Projects/Cell";
import data from "../data/projects";

const Projects = () => (
  <Main>
    <Helmet title="Projects" />
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>
            <Link to="/projects">Projects</Link>
          </h2>
          <p>
            Below is a collection of the current projects hosted by OneUp this
            Fall
          </p>
        </div>
      </header>
      {data.map((projects) => (
        <Cell data={projects} key={projects.title} />
      ))}
    </article>
  </Main>
);

export default Projects;
