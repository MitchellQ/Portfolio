import React from 'react'

export default class SocialIcon extends React.Component {
    
    render() {
        const { href, icon } = this.props.icon;
        
        return (
            <a href={href} className={this.props.className || null} target="_blank" rel="noopener">
                <i className={icon} />
            </a>
        )
    }
}