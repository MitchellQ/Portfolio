import React from 'react';
import HtmlComment from '../javascript/components/HtmlComment'
import { sanitiseHtml } from '../javascript/functions'
import SocialIcon from './Components/SocialIcon';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = require('../data/footer.json');
    }
    
    render() {
        const { about, quickLinks } = this.state;

        return (
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="footer-heading mb-4">About</h2>
                            <p dangerouslySetInnerHTML={{__html: sanitiseHtml(about).replace(/\n/g, '</p><p>')}} />
                        </div>
                        <div className="col-md-3 ml-auto">
                            <h2 className="footer-heading mb-4">Quick Links</h2>
                            <ul className="list-unstyled">
                                {
                                    quickLinks.map((l, key) => {
                                        
                                        return <li key={key}>
                                            <a href={l.href} className="js-scroll-trigger" download={l.name == "Download CV"}>
                                                { l.name == "Download CV" ? <i className="far fa-download pr-2"></i> : null }
                                                {l.name}
                                            </a>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h2 className="footer-heading mb-4">Find Me</h2>
                            {
                               <div className="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="mitchellq"><a className="LI-simple-link" href='https://nz.linkedin.com/in/mitchellq?trk=profile-badge'>Mitchell Quarrie</a></div>
                            }
                        </div>
                    </div>
                    <div className="row pt-5 mt-5 text-center">
                        <div className="col-md-12">
                            <div className="border-top pt-5">
                                <HtmlComment text={"Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0."} />
                                <p> Copyright © { new Date().getFullYear() } | This template is made with 
                                        <i className="icon-heart text-danger" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                </p>
                                <HtmlComment text={"Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0."} />                            
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}