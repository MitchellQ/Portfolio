import React from "react";

export default class Testimonials extends React.Component {
  constructor(props) {
    super(props);

    this.state = require("../data/testimonials.json");
  }

  render() {
    const { testimonials } = this.state;

    const testimonialCards = testimonials
      ? testimonials.map((testimonial, key) => {
          return (
            <TestimonialCard
              content={testimonial.content}
              author={testimonial.author}
              image={testimonial.image}
              key={key}
            />
          );
        })
      : null;

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
          {testimonialCards}
        </div>
      </section>
    );
  }
}

class TestimonialCard extends React.Component {
  static defaultProps = {
    content: "",
    author: "",
    iamge: "",
  };

  render() {
    const { content, author, image } = this.props;

    return (
      <div>
        <div className="testimonial">
          <blockquote className="mb-5">
            <p>&ldquo;{content}&rdquo;</p>
          </blockquote>
          <figure className="mb-4 d-flex align-items-center justify-content-center">
            <div>
              <img src={image} alt="Image" className="w-50 img-fluid mb-3" />
            </div>
            <p>{author}</p>
          </figure>
        </div>
      </div>
    );
  }
}
