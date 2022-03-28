import React from 'react'

export default class SocialIcon extends React.Component {

    render() {
        const { href, icon } = this.props.icon;

        return (



            <a href={href} className={`${this.props.className || null} px-2`} target="_blank" rel="noopener">
                <span class="fa-layers">
                    <i class="fal fa-circle"></i>
                    <i class={icon} data-fa-transform="shrink-10"></i>
                </span>
            </a>

        )
    }
}