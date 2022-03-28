import React from 'react';

import ContactForm from '../Components/Form/ContactForm';

export default class Contact extends React.Component {

    render() {
        return (
            <section className="site-section bg-light aos-init aos-animate" id="contact" data-aos="fade">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <h2 className="section-title mb-3">Contact Me</h2>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-6 text-center">
                            <p className="mb-4">
                                <span className="d-block h4 text-accent">
                                    <i className="fal fa-map-marker"></i>
                                </span>
                                <a href="https://goo.gl/maps/Xi44jSDyYt2Kn535A">Christchurch, New Zealand</a>
                            </p>
                        </div>
                        <div className="col-md-6 text-center">
                            <p className="mb-0">
                                <span className="d-block h4 text-accent">
                                    <i className="fal fa-envelope"></i>
                                </span>
                                <a href="mailto:mitch@mitchellq.dev">mitch@mitchellq.dev</a>
                            </p>
                        </div>
                    </div>

                    <ContactForm />

                </div>
            </section>
        );
    }
}