import React from "react";

export default class Education extends React.Component {
  constructor(props) {
    super(props);

    this.state = require("../data/education.json");
  }

  render() {
    const { education } = this.state;

    const educationCards = education
      ? education.map((item, key) => {
          return (
            <EducationCard
              icon={item.icon}
              title={item.title}
              location={item.location}
              year={item.year}
              key={key}
            />
          );
        })
      : null;

    return (
      <section
        className="site-section border-bottom bg-light"
        id="education-section"
      >
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center" data-aos="fade">
              <h2 className="section-title mb-3">Education</h2>
            </div>
          </div>
          <div className="row align-items-stretch">{educationCards}</div>
        </div>
      </section>
    );
  }
}

class EducationCard extends React.Component {
  static defaultProps = {
    icon: "",
    title: "",
    location: "",
    year: "",
  };

  render() {
    const { icon, title, location, year } = this.props;

    return (
      <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
        <div className="unit-4">
          <div className="unit-4-icon mr-4">
            <span className="text-primary">
              <i className={icon} />
            </span>
          </div>
          <div>
            <h3>{title}</h3>
            <p>{location}</p>
            <p className="text-primary">{year}</p>
          </div>
        </div>
      </div>
    );
  }
}
