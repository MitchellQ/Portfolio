	import React, { Fragment } from "react";

	export default class Project extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			project: require('../data/projects.json')
		}
	}

	render() {
		if (!this.state.project) return null
		
		const project = this.state.project.filter((project) => {
			return project.name.replace(/ /g, "-") == this.props.match.params.name
    })[0];

    const frameworkItems = project.frameworks.map((framework, key) => {
      return <Framework framework={framework.framework} icon={framework.icon} key={key} />
    });

    const projectImages = project.images.map((image, key) => {
      return <ProjectImage src={image.src} caption={image.caption} key={key}/>
    });

		return (
		<section className="site-section">
			<div className="container">
			<div className="row">
				<div className="col-md-8 blog-content">
				<div className="row mb-5">
          {projectImages}
				</div>
        <h2 className="pb-3">{project.name}</h2>
				<p className="lead">
					{project.desc_1}
				</p>
        
        { project.desc_2 ? <p>{project.desc_2}</p> : null }

        { project.desc_3 ? <p>{project.desc_3}</p> : null }

        { project.desc_4 ? <p>{project.desc_4}</p> : null }

				</div>
				<div className="col-md-4 sidebar">
				<div className="sidebar-box">
					<img
					src={project.clientLogo}
					alt="Image placeholder"
					className="img-fluid mb-4"
					/>
					<h3>{project.client}</h3>
          <p className="pb-3">{project.aboutClient}</p>
					
					<Links urls={project.links} />
					
				</div>

				<div className="sidebar-box">
					<div className="categories">
					<h3>Technologies used </h3>
					{frameworkItems}
					</div>
				</div>
				</div>
			</div>
			</div>
		</section>
		);
	}
	}

	class ProjectImage extends React.Component {
    static defaultProps = {
      src: "",
      caption: ""
    }

    render() {
      const { src, caption } = this.props;

      return (
        <div className="col-lg-6">
        <figure>
						<img
						src={src}
						alt="Image"
						className="img-fluid"
						/>
						<figcaption>{caption}</figcaption>
					</figure>
          </div>
      );
    }
	}

	class Framework extends React.Component {
	  static defaultProps = {
	    framework: "",
	    src: ""
	  }

	  render() {
	    const { framework, icon } = this.props;

	    return (
	      <li>{framework} <img style={{ float: "right" }} height="30" src={icon}/></li>
	    );
	  }
	}

  class Links extends React.Component {
    render() {
        const {website, android, apple} = this.props.urls;

        let btn = website ? <div className="text-center" ><a href={website}  target="_blank" rel="noopener" className="btn btn-primary btn-sm app-badge">
						Visit the site
					</a></div> : null

        let google_btn = android ? <a href={android} target="_blank" rel="noopener">
            <img className="app-badge" src="/dist/images/google play badge.png" alt="Get it on Google Play"/>
        </a> : null

        let apple_btn = apple ? <a href={apple} target="_blank" rel="noopener">
            <img className="app-badge" src="dist/images/apple app store badge.png" alt="Get it on the App Store"/>
        </a> : null

        return (
            <Fragment>
                <div className="my-3">
                    {btn}
                </div>
                <div>
                    {google_btn}
                    {apple_btn}
                </div>
            </Fragment>
        );
    }
}