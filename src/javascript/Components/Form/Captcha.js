import React from 'react';
import Reaptcha from 'reaptcha';

export default class Captcha extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            code: null,
            ready: false
        }

        this.captcha = null;
        this.onVerify = this.recaptchaResponse.bind(this);
        this.onLoad = this.onLoad.bind(this);
    }

    componentDidMount() {
        this.props.onRef(this);
    }

    componentWillUnmount() {
        this.props.onRef(null);
    }

    onLoad() {
        console.log('reCaptcha loaded')
        this.captcha.renderExplicitly();
    }

    recaptchaResponse(code) {
        this.setState({
            code: code || null
        }, this.props.onVerified(code));
    };

    execute() {
        if (!!this.props.requireReady && !this.state.ready) return;

        if (this.state.code) {
            this.captcha.reset();
        }

        this.captcha.execute();
    }

    render() {
        const { size, theme } = this.props;

        if (!this.props.sitekey) return null;

        return <Reaptcha
            ref={e => (this.captcha = e)}
            sitekey={this.props.sitekey}
            onExpire={this.onVerify}
            onVerify={this.onVerify}
            onLoad={this.onLoad}
            inject={false}
            size={size || "invisible"}
            theme={theme || "light"}
            explicit
        />
    }
}