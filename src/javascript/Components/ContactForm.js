import React from 'react';
import { Input, TextArea, FormGroup } from './FormControls';
import Captcha from './Captcha';

/** Import react-toastify to provide fancy notifications */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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
        this.onVerified = this.onVerified.bind(this);
    }

    componentDidMount() {
        let apiUrl = "https://mailservice.samuelgrant.dev/"

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
        this.setState({ data });
    }

    handleSubmit(e) {
        e.preventDefault();

        // Don't process the request if a reCAPTCHA code is required and missing
        if (!!this.state.reCaptchaKey && !this.state.data.CaptchaCode) return;

        let data = this.state.data;
        data['Subject'] = "New contact form enquiry: " + data['Subject'];
        console.log(data)
        $.ajax({
            type: 'post',
            url: this.state.apiUrl,
            dataType: "json",
            crossDomain: true,
            data,
            success: ((msg) => toast.success(msg)),
            error: ((err) => toast.error(err.responseText || err.responseJSON))
        });
    }

    handleChange(key, val) {
        let data = this.state.data;
        data[key] = val
        this.setState({
            data
        });
    }

    render() {
        const { From, Message } = this.state.data;
        const { errors, success } = this.state;

        return (            
            this.state.apiUrl && this.state.reCaptchaKey ? (
                <div className="row">
                    <div className="col-md-12 mb-5">
                        <form onSubmit={this.handleSubmit} className="px-5 py-3 bg-white">
                            
                            <div className="row">
                                <FormGroup className="form-group col-12 mb-3 mb-md-0">
                                    <Input type="name" placeHolder="Name" required
                                        autoComplete="name" value={this.state.email}
                                        onChange={(val) => this.handleChange('From', {Name: val, Email: From.Email})}
                                    />
    
                                    <Messages errors={errors ? errors.Name : null} type="error" />
                                </FormGroup>
    
                                <FormGroup className="form-group col-12 mb-3 mb-md-0">
                                    <Input type="email" placeHolder="Email" required
                                        autoComplete="email" value={this.state.Email}
                                        onChange={(val) => this.handleChange('From', {Name: From.Name, Email: val})}
                                    />
    
                                    <Messages errors={errors ? errors.Email : null} type="error" />
                                </FormGroup>
    
                                <FormGroup className="form-group col-12 mb-3 mb-md-0">
                                    <Input type="text" placeHolder="Subject"
                                        value={this.state.subject}
                                        onChange={this.handleChange.bind(this, 'Subject')}
                                    />
                                </FormGroup>
    
                                <FormGroup className="form-group col-12">
                                    <TextArea placeHolder="Write your notes or questions here..." required
                                        value={this.state.message} cols="30" rows="7"
                                        onChange={this.handleChange.bind(this, 'Message')}
                                    />
    
                                    <Messages errors={errors ? errors.Message : null} type="error" />
                                </FormGroup>
    
                                <Captcha onRef={reCaptcha => (this.reCaptcha = reCaptcha)} theme={'light'} size={'normal'}
                                    sitekey={this.state.reCaptchaKey} requireReady={false} onVerified={this.onVerified}
                                />
    
                                <div className="col-md-12">
                                    <Button className="btn btn-primary btn-md text-white mt-3" disabled={!this.state.data.CaptchaCode && !!this.state.reCaptchaKey} pending={false}>
                                        <i className="fas fa-envelope mr-2" /> Send Email
                                    </Button>
                                </div>
    
                                {/* Toast container */}
                                <ToastContainer
                                    position="top-right"
                                    autoClose={10 * 1000}
                                    hideProgressBar={true}
                                    closeOnClick={true}
                                    closeButton={true}
                                    pauseOnHover
                                />
                            </div>
                        </form>
                    </div>
                </div>
            ): null           
        );
    }
}

class Messages extends React.Component {
    render() {

        let color = this.props.type == "error" ? "danger" : "success";

        return !this.props.errors ? null : (
            <React.Fragment>
                {
                    this.props.errors.map((err, key) => {
                        return <label className={`text-${color}`} key={key}>{err}</label>
                    })
                }
            </React.Fragment>
        )
    }
}

class Button extends React.Component {
    render() {
        const { id, children, className, disabled, pending, readOnly } = this.props;

        return <button id={id || null} className={className} disabled={!!disabled || !!pending} readOnly={!!readOnly}>
            { !pending ? children : (
            <React.Fragment>
                <span class="sr-only">Loading...</span>
                <i className="fas fa-spinner fa-spin"/>
            </React.Fragment>
            )}
        </button>
    }
}