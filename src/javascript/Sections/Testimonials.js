import React from "react";
import TestimonialCard from '../Components/TestimonialCard';

export default class Testimonials extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			testimonials: require("../../data/testimonials.json"),
			index: 0
		}

		this.setIndex = this.setIndex.bind(this);
	}

	// Set an interval to auto play
	componentDidMount() {
		this.autoplay = setInterval(() => {
			this.setIndex(this.state.index + 1)
		}, 2 * 1000);
	}

	// Clean resources when we kill this component
	componentWillUnmount() {
		clearInterval(this.autoplay);
	}

	// Adjust the index
	setIndex(i) {
		const { testimonials } = this.state;

		if (i < 0) {
			i = testimonials.length - 1
		} else if (i >= testimonials.length) {
			i = 0;
		}

		this.setState({ index: i });
	}

	render() {
		const { index, testimonials } = this.state;

		return (
			<section className="site-section testimonial-wrap" id="testimonials" data-aos="fade">
				<div className="container">
					<div className="row mb-5">
						<div className="col-12 text-center">
							<h2 className="section-title mb-3">Testimonials</h2>
						</div>
					</div>
				</div>

				<div>
					<TestimonialCard testimonial={testimonials[index]} />
				</div>
			</section>
		);
	}
}