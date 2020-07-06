import React, { Fragment } from "react";

import About from "./About";
import Project from "./Project";
import FeaturedProjects from "./FeaturedProjects";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Education from './Education';

import Landing from "./Components/Landing";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = require("../data/siteSettings.json");

    // Renders the scroll to top button when Y offset is greater than 100
    $(function () {
      const scrollUp = document.querySelector('.scrollUp');

      window.addEventListener('scroll', () => {
        window.pageYOffset > 100 ? scrollUp.classList.add("active") : scrollUp.classList.remove("active");
      });
    });
  }

  componentDidMount() {
    // If an #val was specified in the url
    // scroll there and remove the #val from the window.location
    let url = window.location;
    if (url.hash) {
      $('html,body').animate({
        scrollTop: $(url.hash).offset().top
      }, 1000);

      window.history.replaceState({}, document.title,
        url.toString().substr(0, url.toString().indexOf('#')));
    }
  }

  render() {
    const { testimonialsVisible, contactFormVisible } = this.state;

    return (
      <Fragment>
        <Landing />
        <About />
        <FeaturedProjects />
        <Education />
        {testimonialsVisible ? <Testimonials /> : null}
        {contactFormVisible ? <Contact /> : null}

        <a href="#landing" className="scrollUp js-scroll-trigger"><i className="fa fa-chevron-up"></i></a>
      </Fragment>
    );
  }
}
