import React from 'react';

export default class ProjectImage extends React.Component {
	render() {
		return (
			<div className="col-lg-6">
				<figure>
					<img className="img-fluid modal-thumbnail" src={this.props.src} style={{ height: "200px" }} alt="Image" onClick={this.props.onClick}/>
					<figcaption>{this.props.caption}</figcaption>
				</figure>
			</div>
		);
	}
}