import React, { Fragment } from "react";
import { sanitiseHtml } from "../javascript/functions";
  
import Techs from './Project/Techs.js';
import Developers from './Project/Developers';
import ProjectImage from './Project/ProjectImage';
import Links from './Project/Links';

import HtmlComment from './Components/HtmlComment.js'

export default class Project extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			project: require("../data/projects.json"),
		};
	}

	render() {
		if (!this.state.project) return null;

		const project = this.state.project.filter((project) => {
			return project.name.replace(/ /g, "-") == this.props.match.params.name;
		})[0];

		const projectImages = project.images.map((image, key) => {
			return <ProjectImage src={image.src} caption={image.caption} key={key} />;
		});

		return (
			<section className="site-section">
				<div className="container">
					<div className="row mt-5">
						<div className="col-md-8 blog-content">
							<div className="row mb-5">{projectImages}</div>
								<h2 className="pb-3">{project.name}</h2>
								<p dangerouslySetInnerHTML={{ __html: sanitiseHtml(project.description).replace(/\n/g, "</p><p>")}} />
							</div>
				
							<HtmlComment text="Project Sidebar" />
							<div className="col-4">
								<img src={project.clientLogo} alt="Image placeholder" className="img-fluid mb-4" />
								<h3>{project.client}</h3>
								<p className="pb-3">{project.aboutClient}</p>

								<Links urls={project.links} />
								<Techs frameworks={project.frameworks} />
								<Developers developers={project.developers} />
							</div>
						</div>
					</div>
				</section>
		);
	}
}