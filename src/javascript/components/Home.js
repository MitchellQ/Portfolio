import React, { Fragement } from "react";

import About from "./About";
import Project from "./Project";
import FeaturedProjects from "./FeaturedProjects";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

import Landing from "./components/Landing";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = require("../data/siteSettings.json");
  }

  render() {
    const { testimonialsVisible, contactFormVisible } = this.state;

    return (
      <Fragment>
        <Landing />
        <About />
        <FeaturedProjects />
        {testimonialsVisible ? <Testimonials /> : null}
        {contactFormVisible ? <Contact /> : null}
      </Fragment>
    );
  }
}
