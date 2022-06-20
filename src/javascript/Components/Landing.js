import React from 'react';
import Modal from '../Components/Project/Modal';
import { sanitiseHtml } from '../functions';

export default class Landing extends React.Component {
    constructor(props) {
        super(props);

        this.state = require('../../data/landing.json');
    }

    setShow(show){
        setState({show:show});
    }

    render() {
        const { greeting, message } = this.state;
        const show = true;

        let message_html = sanitiseHtml(message).replace(/\n/g, '</p><p>');

        return (
            <div className="site-blocks-cover overlay aos-init aos-animate" style={{ backgroundImage: 'url(dist/images/landing.jpg)' }} data-aos="fade" id="landing">

                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-8 mt-lg-5 text-center">
                            <h1 className="aos-init aos-animate" data-aos="fade-up">{greeting}</h1>
                            <p className="mb-5 desc aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" dangerouslySetInnerHTML={{ __html: message_html }} />
                            {/* <div data-aos="fade-up" data-aos-delay="100" className="aos-init aos-animate">
                                <a href="#contact" className="btn js-scroll-trigger btn-primary mr-2 mb-2">Get In Touch</a>
                            </div> */}

                            <button onClick={() => setShow(true)}>Show modal</button>
                            <Modal show={show}/>
                        </div>
                    </div>
                </div>

                <a href="#about" className="mouse js-scroll-trigger">
                    <span className="mouse-icon">
                        <span className="mouse-wheel" />
                    </span>
                </a>
            </div>
        )
    }
}