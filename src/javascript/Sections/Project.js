import React from "react";

import { sanitiseHtml } from "../functions";

import Techs from '../Components/Project/Techs';
import Developers from '../Components/Project/Developers';
import ProjectImage from '../Components/Project/ProjectImage';
import Links from '../Components/Project/Links';
import Modal from '../Components/Project/Modal';

import HtmlComment from '../Components/HtmlComment'

export default class Project extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			project: require("../../data/projects.json"),
			projectImages: [],
			show: false,
			modalTitle: '',			
			modalImage: ''
		};

		this.setShow = this.setShow.bind(this);
	}

	setShow(i, image) {
		this.setState({show: i});

		if(image === undefined) return;

		this.setState({
			modalTitle: image.caption,
			modalImage: image.src
		});
	}

	render() {
		const { show } = this.state;

		if (!this.state.project) return null;

		const project = this.state.project.filter((project) => {
			return project.name.replace(/ /g, "-") == this.props.match.params.name;
		})[0];

		const projectImages = project.images.map((image, key) => {
			return <ProjectImage src={image.src} caption={image.caption} key={key} onClick={() => this.setShow(true, image)}/>;
		});

		return (
			<section className="site-section">
				<Modal title={this.state.modalTitle} onClose={() => this.setShow(false)} show={show}>
					<img className="modal-image" src={this.state.modalImage} alt="Modal Image"/>
				</Modal>
				
				<div className="container">
					<div className="row mt-5">
						<div className="col-md-8 blog-content">
							<div className="row mb-5">{projectImages}</div>
							<h2 className="pb-3">{project.name}</h2>
							<p dangerouslySetInnerHTML={{ __html: sanitiseHtml(project.description).replace(/\n/g, "</p><p>") }} />
						</div>

						<HtmlComment text="Project Sidebar" />
						<div className="col">
							<img src={project.clientLogo} alt="Client logo" className="img-fluid mb-4" />
							<h3>{project.client}</h3>
							<p className="pb-3">{project.aboutClient}</p>

							<Links urls={project.links} />
							<Techs frameworks={project.frameworks} />
							<Developers developers={project.otherDevelopers} />
						</div>
					</div>
				</div>
			</section>
		);
	}
}