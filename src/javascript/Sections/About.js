import React from "react";

import { sanitiseHtml } from '../functions'

export default class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = require("../../data/about.json");
  }

  render() {
    const { about, socialIcons } = this.state;

    const icons = socialIcons ? socialIcons.map((icon, key) => {
      return <SocialIcon icon={icon.icon} href={icon.href} key={key} />
    }) : null ;

    return (
      <div className="site-section cta-big-image" id="about">
        <div className="container">
          <div className="row mb-5">
            <div
              className="col-12 text-center aos-init aos-animate"
              data-aos="fade"
            >
              <h2 className="section-title mb-3">About</h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-2 col-lg-3 mb-4"
              data-aos="fade-up"
              data-aos-delay=""
            >
              <div className="about">
                <figure>
                  <ul className="social">
                    {icons}
                  </ul>
                  <img
                    src="/dist/images/about.jpg"
                    alt="Image"
                    className="img-fluid rounded"
                  />
                </figure>
              </div>
            </div>
            <div
              className="col-lg-8 ml-auto aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="mb-4">
              <p dangerouslySetInnerHTML={{__html: sanitiseHtml(about).replace(/\n/g, '</p><p>')}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class SocialIcon extends React.Component {

  render() {

    const { icon, href } = this.props;

    var hrefTest = href;

    return (
      <li>
        <a href={href} target={hrefTest.includes('/dist') ? '_blank' : '_self' } download={hrefTest.includes('/dist')} rel="noopener">
          <i className={icon}></i>
        </a>
      </li>
    );
  }
}
