import React, { Component } from 'react'
import { render } from 'react-dom'

import ErrorBoundary from './components/ErrorBoundary';
import Landing from './components/Landing';
import Spinner from './components/Spinner';
import SiteNav from './components/SiteNav';

import About from './About';
import Project from './Project';
import FeaturedProjects from './FeaturedProjects';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

export default class Wrapper extends Component {
    constructor(props) {
        super(props);

        this.state = require('../data/siteSettings.json');
    }

    render() {
        const { testimonialsVisible, featuredProjectsVisible, contactFormVisible } = this.state;

        return (
            <ErrorBoundary>
                <Spinner />            
                <div className="site-wrap">
                    <SiteNav />
                    <Landing />              
                    <Project />
                    <About />
                    {featuredProjectsVisible ? <FeaturedProjects /> : null}
                    {testimonialsVisible ? <Testimonials /> : null}
                    {contactFormVisible ? <Contact /> : null}
                    <Footer />
                </div>
            </ErrorBoundary>
        );
    }
}

if(document.getElementById('root')) {
    render(<Wrapper />, document.getElementById('root'))
}