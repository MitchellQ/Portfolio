import React from "react";
import { sanitiseHtml } from '../javascript/functions'

export default class FeaturedProjects extends React.Component {
  constructor(props) {
    super(props);

    this.state = { projects: require("../data/projects.json") } 
  }

  render() {
    const { projects } = this.state;

    const images = projects ? projects.map((project, key) => {
      if (project.featuredProject == true) {
        return <ProjectImage path={project.images[0].src} key={key} />;
      }
    }) : null;

    const cards = projects ? projects.map((project, key) => {
      if (project.featuredProject == true) {
        return (
          <ProjectCard
            title={project.title}
            tagline={project.tagline}
            desc_1={project.desc_1}
            moreInfo={project.moreInfo}
            key={key}
          />
        );
      }
    }) : null;

    return (
      <section className="site-section" id="featured">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-md-7 text-center">
              <h2
                className="section-title mb-3"
                data-aos="fade-up"
                data-aos-delay=""
              >
                Featured Projects
              </h2>
              <p className="lead" data-aos="fade-up" data-aos-delay="100">
                Some of my most recent projects
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="">
              <div className="owl-carousel slide-one-item-alt">
                {images}
              </div>
              <div className="custom-direction">
                <a href="#" className="custom-prev">
                  <span>
                    <i className="far fa-long-arrow-left"></i>
                  </span>
                </a>
                <a href="#" className="custom-next">
                  <span>
                    <i className="far fa-long-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
            <div
              className="col-lg-5 ml-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="owl-carousel slide-one-item-alt-text">
                {cards}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

class ProjectImage extends React.Component {
  static defaultProps = {
    path: "",
  };

  render() {
    const { path } = this.props;

    return <img src={path} alt="Image" className="img-fluid" />;
  }
}

class ProjectCard extends React.Component {
  static defaultProps = {
    title: "",
    tagline: "",
    desc_1: "",
    moreInfo: "",
  };

  render() {
    const { title, tagline, desc_1, moreInfo } = this.props;

    return (
      <div>
        <h2 className="section-title mb-3">{title}</h2>
        <p className="lead">{tagline}</p>
        <p dangerouslySetInnerHTML={{__html: sanitiseHtml(desc_1).replace(/\n/g, '</p><p>')}} />
        <p>
          <a href={moreInfo} className="btn btn-primary mr-2 mb-2">
            Learn More
          </a>
        </p>
      </div>
    );
  }
}
