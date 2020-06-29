import React from 'react';

export default class ProjectImage extends React.Component {
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