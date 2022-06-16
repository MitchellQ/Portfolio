import React from 'react';

export default class Techs extends React.Component {

	render() {
		return (
			<React.Fragment>
				<h4 className="text-center">Technologies &amp; Platforms</h4>
				<div className="card techs-profile">
					<ul className="list-group list-group-flush">
						{
							this.props.frameworks.map((tech, key) => {
								return <TechItem tech={tech} key={key} />
							})
						}
					</ul>
				</div>
			</React.Fragment>
		);
	}
}

class TechItem extends React.Component {
	getImgUrl(s) {
		return s.replace(/ /g, '').replace('.', '').toLowerCase();
	}

	render() {
		const { tech } = this.props;

		return (
			<li className="list-group-item">
				<span>{tech}</span>
				<img src={`/dist/images/frameworkLogos/${this.getImgUrl(tech)}.png`} alt={`${tech}'s logo`} />
			</li>
		)
	}
}