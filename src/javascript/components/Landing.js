import React, { Component } from 'react';
import { sanitiseHtml } from '../functions';

export default class Landing extends Component {
    constructor(props) {
        super(props);

        this.state = require('../../data/landing.json');
    }

    render() {
        const { greeting, message } = this.state;

        let message_html = sanitiseHtml(message).replace(/\n/g, '</p><p>');

        return (
            <div className="site-blocks-cover overlay aos-init aos-animate" style={{backgroundImage: 'url(dist/images/landing.jpg)'}} data-aos="fade" id="home-section">

                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-8 mt-lg-5 text-center">
                            <h1 className="aos-init aos-animate" data-aos="fade-up">{greeting}</h1>
                            <p className="mb-5 desc aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" dangerouslySetInnerHTML={{__html: message_html}}/>
                            <div data-aos="fade-up" data-aos-delay="100" className="aos-init aos-animate">
                                <a href="#contact-section" className="btn smoothscroll btn-primary mr-2 mb-2">Get In Touch</a>
                            </div>
                        </div>
                    </div>
                </div>

                <a href="#about-section" className="mouse smoothscroll">
                    <span className="mouse-icon">
                        <span className="mouse-wheel" />
                    </span>
                </a>
            </div>
        )
    }
}