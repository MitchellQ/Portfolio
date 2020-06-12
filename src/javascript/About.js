import React from 'react';

export default class About extends React.Component {

    render() {
        return (
          <div className="site-section cta-big-image" id="about-section">
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
                {/* <div
                  className="col-lg-6 mb-5 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay=""
                >
                  
                    <img
                      src="/dist/images/slide_1.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  
                </div> */}
                <div
                  className="col-md-2 col-lg-3 mb-4"
                  data-aos="fade-up"
                  data-aos-delay=""
                >
                  <div className="about">
                    <figure>
                      <ul className="social">
                        <li>
                          <a href="https://github.com/mitchellq" target="_blank">
                            <i className="fab fa-github"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://linkedin.com/in/mitchellq" target="_blank">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                      <img
                        src="/dist/images/about.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="p-3">
                      <h3>Mitchell Quarrie</h3>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-8 ml-auto aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="mb-4">
                    <h3 className="h3 mb-4 text-black">
                      For the next great business
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quo tempora cumque eligendi in nostrum labore omnis
                      quaerat.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quo tempora cumque eligendi in nostrum labore omnis
                      quaerat.
                    </p>
                  </div>

                  <div className="mb-4">
                    <ul className="list-unstyled ul-check success">
                      <li>Officia quaerat eaque neque</li>
                      <li>Possimus aut consequuntur incidunt</li>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Consectetur adipisicing elit</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}