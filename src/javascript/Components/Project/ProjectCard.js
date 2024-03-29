import React from 'react';

import { sanitiseHtml } from '../../functions'

export default class ProjectCard extends React.Component {
    projectUrl(url) {
        return `/Projects/${url.replace(/ /g, '-').replace('.', '-')}`;
    }

    render() {
        if (!this.props.project) return null;

        const { images, name, short_description } = this.props.project;

        return (
            <div className="row">
                <div className="col-md-5 col-sm-12 pr-4">
                    <a href={this.projectUrl(name)}>
                        <img className="img-fluid" style={{ height: "200px" }} src={images[0].src} alt={images[0].caption} />
                    </a>
                </div>

                <div className="col-md-2 col-sm-12 controls">
                    <div className="btn-group btn-group-sm" role="group">
                        <button className="btn btn-primary" onClick={() => this.props.previous()}>
                            <i className="fal fa-angle-double-left" />
                        </button>
                        <button className="btn btn-primary" onClick={() => this.props.next()}>
                            <i className="fal fa-angle-double-right" />
                        </button>
                    </div>
                </div>

                <div className="col-md-5 col-sm-12 pl-4">
                    <h4>{name}</h4>
                    <p dangerouslySetInnerHTML={{ __html: sanitiseHtml(short_description).replace(/\n/g, '</p><p>') }} />
                    <a className="btn btn-primary" href={this.projectUrl(name)}>
                        Case Study &nbsp; <i className="fal fa-angle-right" />
                    </a>
                </div>
            </div>
        )
    }
}