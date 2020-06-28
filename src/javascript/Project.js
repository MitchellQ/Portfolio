import React, { Fragment } from "react";
import { sanitiseHtml } from "../javascript/functions";

export default class Project extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      project: require("../data/projects.json"),
    };
  }

  render() {
    if (!this.state.project) return null;

    const project = this.state.project.filter((project) => {
      return project.name.replace(/ /g, "-") == this.props.match.params.name;
    })[0];

    const frameworks = project.frameworks.map((framework, key) => {
      return (
        <ListItem
          text={framework.framework}
          icon1={framework.icon}
          key={key}
        />
      );
    });

    const developers = project.developers.map((developer, key) => {
      return (
        <ListItem
          text={developer.name}
          icon1={'/dist/images/github.png'}
          href1={developer.githubName}
          icon2={'/dist/images/linkedin.png'}
          href2={developer.linkedin}
          key={key}
        />
      );
    });

    const projectImages = project.images.map((image, key) => {
      return <ProjectImage src={image.src} caption={image.caption} key={key} />;
    });

    return (
      <section className="site-section">
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-8 blog-content">
              <div className="row mb-5">{projectImages}</div>
              <h2 className="pb-3">{project.name}</h2>
              <p
                className="lead"
                dangerouslySetInnerHTML={{
                  __html: sanitiseHtml(project.desc_1).replace(
                    /\n/g,
                    "</p><p>"
                  ),
                }}
              />

              {project.desc_2 ? (
                <p
                  dangerouslySetInnerHTML={{
                    __html: sanitiseHtml(project.desc_2).replace(
                      /\n/g,
                      "</p><p>"
                    ),
                  }}
                />
              ) : null}

              {project.desc_3 ? (
                <p
                  dangerouslySetInnerHTML={{
                    __html: sanitiseHtml(project.desc_3).replace(
                      /\n/g,
                      "</p><p>"
                    ),
                  }}
                />
              ) : null}

              {project.desc_4 ? (
                <p
                  dangerouslySetInnerHTML={{
                    __html: sanitiseHtml(project.desc_4).replace(
                      /\n/g,
                      "</p><p>"
                    ),
                  }}
                />
              ) : null}
            </div>
            <div className="col-md-4 sidebar">
              <div className="sidebar-box">
                <img
                  src={project.clientLogo}
                  alt="Image placeholder"
                  className="img-fluid mb-4"
                />
                <h3>{project.client}</h3>
                <p className="pb-3">{project.aboutClient}</p>

                <Links urls={project.links} />
              </div>

              <div className="sidebar-box">
                <div className="categories">
                  <h3>Technologies used </h3>
                  {frameworks}
                </div>
              </div>

              <div className="sidebar-box">
                <div className="categories">
                  <h3>Developers</h3>
                  {developers}
                </div>
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
    src: "",
    caption: "",
  };

  render() {
    const { src, caption } = this.props;

    return (
      <div className="col-lg-6">
        <figure>
          <img src={src} alt="Image" className="img-fluid" />
          <figcaption>{caption}</figcaption>
        </figure>
      </div>
    );
  }
}

class ListItem extends React.Component {
  static defaultProps = {
    href1: "javascript:void(0)",
    href2: "javascript:void(0)",
  };

  render() {
    const { text, icon1, icon2, href1, href2 } = this.props;

    var hrefTest1 = href1;
    var hrefTest2 = href2;

    return (
      <li>
          {text}
          <a href={href1}
          target={hrefTest1.includes('javascript') ? '_blank' : '_self'}
          rel="noopener"
          >
            <img style={{ float: "right", verticalAlign: "middle" }} height="30" src={icon1} />{" "}
          </a>
          <a href={href2}
          target={hrefTest2.includes('javascript') ? '_blank' : '_self'}
          rel="noopener"
          >
            {icon2 ? (
              <img
                className="pr-3"
                style={{ float: "right" }}
                height="30"
                src={icon2}
              />
            ) : null}
          </a>
      </li>
    );
  }
}

class Links extends React.Component {
  render() {
    const { website, android, apple } = this.props.urls;

    let btn = website ? (
      <div className="text-center">
        <a
          href={website}
          target="_blank"
          rel="noopener"
          className="btn btn-primary btn-sm app-badge"
        >
          Visit the site
        </a>
      </div>
    ) : null;

    let google_btn = android ? (
      <a href={android} target="_blank" rel="noopener">
        <img
          className="app-badge"
          src="/dist/images/google play badge.png"
          alt="Get it on Google Play"
        />
      </a>
    ) : null;

    let apple_btn = apple ? (
      <a href={apple} target="_blank" rel="noopener">
        <img
          className="app-badge"
          src="dist/images/apple app store badge.png"
          alt="Get it on the App Store"
        />
      </a>
    ) : null;

    return (
      <Fragment>
        <div className="my-3">{btn}</div>
        <div>
          {google_btn}
          {apple_btn}
        </div>
      </Fragment>
    );
  }
}
