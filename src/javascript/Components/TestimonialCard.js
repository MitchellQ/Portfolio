import React from 'react'

export default class TestimonialCard extends React.Component {
    render() {
		if(!this.props.testimonial) return null;
        
		const { content, author, image } = this.props.testimonial;

		return (
			<div>
				<div className="testimonial">
					<blockquote className="mb-5">
						<p>{content}</p>
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