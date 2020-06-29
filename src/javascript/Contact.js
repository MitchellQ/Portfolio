import React from 'react';
import { Input, TextArea, FormGroup } from './Components/FormControls';
import Captcha from './Components/Captchpa';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // firstName: '',
            // lastName: '',
            // email: '',
            // subject: '',
            // message: '',

            data: {
                CaptchaCode: "",
                From: {
                    Name: "",
                    Email: ""
                },
                Subject: "",
                Message: ""
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let apiUrl = "https://localhost:44351/"

        $.ajax({
            method: 'get',
            url: apiUrl,
            crossDomain: true,
            success: ((res) => {
                this.setState({
                    apiUrl,
                    reCaptchaKey: res.reCaptchaKey
                });
            })
        });
    }

    onVerified(code) {
        let data = this.state.data;
        data['CaptchaCode'] = code;
        this.setState({data});
    }

    handleSubmit(e) {
        e.preventDefault();

        alert("501: Form submit not implemented");
    }

    // handleChange(key, value) {
    //     this.setState({
    //         [key]: value
    //     });
    // }


    render() {
        return this.state.apiUrl ? (
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
                                    <i className="far fa-map-marker"></i>
                                </span>
                                <span>Invercargill, New Zealand</span>
                            </p>
                        </div>
                        <div className="col-md-6 text-center">
                            <p className="mb-0">
                                <span className="d-block h4 text-accent">
                                    <i className="far fa-envelope"></i>
                                </span>
                                <a href="mailto:mitch@mitchellq.dev">mitch@mitchellq.dev</a>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <form onSubmit={this.handleSubmit} className="p-5 bg-white">
                                <h2 className="h4 text-black mb-5">Contact Form</h2>

                                <div className="row">
                                    <FormGroup className="form-group col-12 mb-3 mb-md-0">
                                        <Input type="name" placeHolder="Name" required
                                            autoComplete="name" value={this.state.email}
                                            onChange={this.handleChange.bind(this, 'name')}
                                        />
                                    </FormGroup>

                                    <FormGroup className="form-group col-12 mb-3 mb-md-0">
                                        <Input type="email" placeHolder="Email" required
                                            autoComplete="email" value={this.state.email}
                                            onChange={this.handleChange.bind(this, 'email')}
                                        />
                                    </FormGroup>

                                    <FormGroup className="form-group col-12 mb-3 mb-md-0">
                                        <Input type="text" placeHolder="Subject"
                                            value={this.state.subject}
                                            onChange={this.handleChange.bind(this, 'subject')}
                                        />
                                    </FormGroup>

                                    <FormGroup className="form-group col-12">
                                        <TextArea placeHolder="Write your notes or questions here..." required
                                            value={this.state.message} cols="30" rows="7"
                                            onChange={this.handleChange.bind(this, 'message')}
                                        />
                                    </FormGroup>

                                    {/* <Captcha onRef={reCaptcha => (this.reCaptcha = reCaptcha)} theme={'light'} size={'normal'}
                                        sitekey={this.state.reCaptchaKey} requireReady={false} onVerified={this.onVerified}
                                    /> */}

                                    <div className="col-md-12">
                                        <input type="submit" id="submit" value="Send Message" className="btn btn-primary btn-md text-white" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        ) : null;
    }
}