import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Featured
import About from "./views/About";
import Contact from "./views/Contact";
import Index from "./views/Index";
import NotFound from "./views/NotFound";
import Resources from "./views/Resources";
import Projects from "./views/Projects";
import Meetings from "./views/Meetings";

// All of our CSS
import "./static/css/main.scss";

ReactDOM.render(
  <Router basename={BASE_PATH}>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/contact" component={Contact} />
      {/* Only useful in development mode */}
      <Route component={NotFound} status={404} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

//<Route path="/about" component={About} />
//<Route path="/resources" component={Resources} />
//<Route path="/projects" component={Projects} />
//<Route path="/meetings" component={Meetings} />
