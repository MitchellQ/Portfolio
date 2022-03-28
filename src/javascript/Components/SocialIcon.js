import React from 'react'

export default class SocialIcon extends React.Component {

    render() {
        const { href, icon } = this.props.icon;

        return (



            <a href={href} className={`${this.props.className || null} px-2`} target="_blank" rel="noopener">
                <span className="fa-layers">
                    <i className="fal fa-circle"></i>
                    <i className={icon} data-fa-transform="shrink-10"></i>
                </span>
            </a>

        )
    }
}