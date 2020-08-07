import React from 'react';

export default class Links extends React.Component {
	render() {
		const { website, android, apple } = this.props.urls;

		let btn = website ? (
			<div className="text-center">
				<a
				href={website}
				target="_blank"
				rel="noopener"
				className="btn btn-primary btn-sm app-badge"
				>
				Visit the site
				</a>
			</div>
		) : null;

		let google_btn = android ? (
			<a href={android} target="_blank" rel="noopener">
				<img
				className="app-badge"
				src="/dist/images/google play badge.png"
				alt="Get it on Google Play"
				/>
			</a>
		) : null;

		let apple_btn = apple ? (
			<a href={apple} target="_blank" rel="noopener">
				<img
				className="app-badge"
				src="dist/images/apple app store badge.png"
				alt="Get it on the App Store"
				/>
			</a>
		) : null;

		return (
		<React.Fragment>
				<div className="my-3">{btn}</div>
				<div>
				{google_btn}
				{apple_btn}
				</div>
			</React.Fragment>
		);
	}
}