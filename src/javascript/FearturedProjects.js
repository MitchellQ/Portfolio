import React from "react";

export default class FeaturedProjects extends React.Component {
  constructor(props) {
    super(props);

    this.state = require("../data/projects.json");
  }

  render() {
    const { projects } = this.state;

    // const images = projects.map((item, key) => {
    //   if (item.projects.featuredProject == 1) {
    //     return <ProjectImage path={item.projects.images[0].src} key={key} />;
    //   }
    // });

    // const cards = projects.map((item, key) => {
    //   if (item.projects.featuredProject == 1) {
    //     return (
    //       <ProjectCard
    //         title={item.projects.title}
    //         tagline={item.projects.tagline}
    //         desc_1={item.projects.desc_1}
    //         moreInfo={item.projects.moreInfo}
    //         key={key}
    //       />
    //     );
    //   }
    // });

    return (
      <section className="site-section" id="featured-section">
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
                {/* {images} */}
                <img
                  src="/dist/images/slide_1.jpg"
                  alt="Image"
                  class="img-fluid"
                />
                <img
                  src="/dist/images/slide_1.jpg"
                  alt="Image"
                  class="img-fluid"
                />
                <img
                  src="/dist/images/slide_1.jpg"
                  alt="Image"
                  class="img-fluid"
                />
              </div>
              <div className="custom-direction">
                <a href="#" className="custom-prev">
                  <span>
                    <i class="far fa-long-arrow-left"></i>
                  </span>
                </a>
                <a href="#" className="custom-next">
                  <span>
                    <i class="far fa-long-arrow-right"></i>
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
                {/* {cards} */}
                <div>
                  <h2 className="section-title mb-3">
                    Minimal and Modern Design
                  </h2>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p>
                    Est qui eos quasi ratione nostrum excepturi id recusandae
                    fugit omnis ullam pariatur itaque nisi voluptas impedit Quo
                    suscipit omnis iste velit maxime.
                  </p>

                  <p>
                    <a href="#" className="btn btn-primary mr-2 mb-2">
                      Learn More
                    </a>
                  </p>
                </div>{" "}
                
                <div>
                  <h2 className="section-title mb-3">Do things with love</h2>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p>
                    Est qui eos quasi ratione nostrum excepturi id recusandae
                    fugit omnis ullam pariatur itaque nisi voluptas impedit Quo
                    suscipit omnis iste velit maxime.
                  </p>

                  <p>
                    <a href="#" className="btn btn-primary mr-2 mb-2">
                      Learn More
                    </a>
                  </p>
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
        <p>{desc_1}</p>
        <p>
          <a href={moreInfo} className="btn btn-primary mr-2 mb-2">
            Learn More
          </a>
        </p>
      </div>
    );
  }
}
