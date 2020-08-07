import React from 'react';

import SocialIcon from '../Components/SocialIcon';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = require("../../data/about.json");
    }
    render() {
        const { socialIcons } = this.state;

        const icons = socialIcons ? socialIcons.map((icon, key) => {
            return <SocialIcon icon={icon} key={key} />
        }) : null;

        return (
            <footer className="site-footer">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12 social p-3">
                           {icons} 
                        </div>
                        <div className="col-12">
                            <div className="border-top pt-3">
                                <p>Mitchell Quarrie Dev &copy; {new Date().getFullYear()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}