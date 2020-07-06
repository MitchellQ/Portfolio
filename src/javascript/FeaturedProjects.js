import React from "react";
import FeaturedProject from "./Components/FeaturedProject";
import HtmlComment from './Components/HtmlComment';

export default class FeaturedProjects extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			projects: require("../data/projects.json"),
			index: 0
		} 

		this.setIndex = this.setIndex.bind(this);
	}

	// Set an interval to auto play
	componentDidMount() {
		this.autoplay = setInterval(() => {
			this.setIndex(this.state.index +1)
		}, 10 * 1000);
	}

	// Clean resources when we kill this component
	componentWillUnmount() {
		clearInterval(this.autoplay);
	}

	// Code to fire each time the index, or projects are updated
	componentDidUpdate(_, prevState) {
		if(prevState.projects.length != this.state.projects.length) {
			this.setIndex(this.state.index);
		}

		clearInterval(this.autoplay)
		this.autoplay = setInterval(() => {
			this.setIndex(this.state.index +1)
		}, 10 * 1000);
	}

	// Adjust the index
	setIndex(i) {
		const { projects } = this.state;
		
		if(i < 0) {
			i = projects.length -1
		} else if (i >= projects.length) {
			i = 0;
		}
		
		this.setState({index: i});		 
	}

	render() {
		const { index, projects } = this.state;
		
		return (
		<section className="site-section" id="featured">
			<div className="container">
				<HtmlComment text="Section mast" />
				<div className="row mb-5 justify-content-center">
					<div className="col-md-7 text-center">
						<h2 className="section-title mb-3" data-aos="fade-up" data-aos-delay="">Featured Projects</h2>

						<p className="lead" data-aos="fade-up" data-aos-delay="100">Dive into the Case Studies of my Featured Projects</p>
					</div>
				</div>

				<HtmlComment text="Featured Project Display" />
				<div className="featured-project-wrapper" >
					<FeaturedProject project={projects[index]}
						next={() => this.setIndex(index +1)}
						previous={() => this.setIndex(index -1)} 
					/>
				</div>
			</div>
		</section>
		);
	}
}