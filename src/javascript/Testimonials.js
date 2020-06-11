import React from "react";

export default class Testimonials extends React.Component {
    constructor(props) {
    super(props);

    this.state = require("../data/testimonials.json");
    }

    render() {
        return (
            <section
                className="site-section testimonial-wrap"
                id="testimonials-section"
                data-aos="fade"
            >
                <div className="container">
                <div className="row mb-5">
                    <div className="col-12 text-center">
                    <h2 className="section-title mb-3">Testimonials</h2>
                    </div>
                </div>
                </div>

                <div className="slide-one-item home-slider owl-carousel">
                <div>
                    <div className="testimonial">
                    <blockquote className="mb-5">
                        <p>
                        &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Consectetur unde reprehenderit aperiam quaerat fugiat
                        repudiandae explicabo animi minima fuga beatae illum eligendi
                        incidunt consequatur. Amet dolores excepturi earum unde
                        iusto.&rdquo;
                        </p>
                    </blockquote>

                    {/* <figure className="mb-4 d-flex align-items-center justify-content-center">
                        <div>
                        <img
                            src="images/person_3.jpg"
                            alt="Image"
                            className="w-50 img-fluid mb-3"
                        />
                        </div>
                        <p>John Smith</p>
                    </figure> */}
                    </div>
                </div>
                <div>
                    <div className="testimonial">
                    <blockquote className="mb-5">
                        <p>
                        &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Consectetur unde reprehenderit aperiam quaerat fugiat
                        repudiandae explicabo animi minima fuga beatae illum eligendi
                        incidunt consequatur. Amet dolores excepturi earum unde
                        iusto.&rdquo;
                        </p>
                    </blockquote>
                    {/* <figure className="mb-4 d-flex align-items-center justify-content-center">
                        <div>
                        <img
                            src="images/person_2.jpg"
                            alt="Image"
                            className="w-50 img-fluid mb-3"
                        />
                        </div>
                        <p>Christine Aguilar</p>
                    </figure> */}
                    </div>
                </div>

                <div>
                    <div className="testimonial">
                    <blockquote className="mb-5">
                        <p>
                        &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Consectetur unde reprehenderit aperiam quaerat fugiat
                        repudiandae explicabo animi minima fuga beatae illum eligendi
                        incidunt consequatur. Amet dolores excepturi earum unde
                        iusto.&rdquo;
                        </p>
                    </blockquote>
                    {/* <figure className="mb-4 d-flex align-items-center justify-content-center">
                        <div>
                        <img
                            src="images/person_4.jpg"
                            alt="Image"
                            className="w-50 img-fluid mb-3"
                        />
                        </div>
                        <p>Robert Spears</p>
                    </figure> */}
                    </div>
                </div>

                <div>
                    <div className="testimonial">
                    <blockquote className="mb-5">
                        <p>
                        &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Consectetur unde reprehenderit aperiam quaerat fugiat
                        repudiandae explicabo animi minima fuga beatae illum eligendi
                        incidunt consequatur. Amet dolores excepturi earum unde
                        iusto.&rdquo;
                        </p>
                    </blockquote>
                    {/* <figure className="mb-4 d-flex align-items-center justify-content-center">
                        <div>
                        <img
                            src="images/person_4.jpg"
                            alt="Image"
                            className="w-50 img-fluid mb-3"
                        />
                        </div>
                        <p>Bruce Rogers</p>
                    </figure> */}
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

class Testimonial extends React.Component {}
