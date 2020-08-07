import React, { Component } from 'react'

const Type = ['email', 'password', 'url', 'number', 'tel', 'hidden'];

// Dev docs: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
const AutoComplete = [
    // Generic fields
    "off", "on", "email", "tel", "username", "current-password", "new-password", "one-time-code",
    // Org fields
    "organization-title", "organization",
    // Name fields
    "name", "honorific-prefix", "given-name", "additional-name", "family-name",
    // Address fields
    "street-address", "address-line1", "address-line2", "address-level1", "address-level2", "address-level3", "address-level4", "country", "country-name", "postal-code",
]

export class FormGroup extends Component {
    render() {
        const { children, className, htmlFor, label, required } = this.props;

        return (
            <div className={className || "form-group"}>
                <label htmlFor={htmlFor} required={!!required}>{label}</label>
                {children}
            </div>
        )
    }
}

export class Input extends Component {
    constructor(props) {
        super(props);

        this.state = { value: this.props.value }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let value = e.target.value;

        this.setState({
            value
        }, () => {
            if (this.props.onChange) {
                this.props.onChange(value)
            }
        });
    }

    getAutoComplete() {
        if (AutoComplete.includes(this.props.autoComplete)) {
            return this.props.autoComplete;
        }

        switch (this.props.autoComplete) {
            case 'phone':
                return 'tel';

            case 'password':
                return 'current-password';

            case 'newpassword':
                return 'new-password';

            default:
                return 'off';
        }
    }

    getType() {
        if (!this.props.type) {
            throw 'You must provide a type for an input field';
        }

        if (Type.includes(this.props.type)) {
            return this.props.type;
        }

        return 'text';
    }

    render() {
        const { id, className, name, placeHolder,
            autoFocus, disabled, minLength, maxLength, readOnly, required, tabIndex,
        } = this.props;

        return <input
            id={id || null}
            className={className || 'form-control'}
            type={this.getType()}
            name={name || null}
            autoComplete={this.getAutoComplete()}
            placeholder={placeHolder || null}

            // Attribute properties
            autoFocus={!!autoFocus}
            disabled={!!disabled}
            minLength={minLength || null}
            maxLength={maxLength || null}
            readOnly={!!readOnly}
            required={!!required}
            tabIndex={tabIndex || 0}

            // Control properties
            onChange={this.handleChange}
            onPaste={this.handleChange}
            value={this.state.value || ""}
        />
    }
}
export class TextArea extends Component {
    constructor(props) {
        super(props);

        this.state = { value: this.props.value }
        this.onChange = this.handleChange.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.value != this.props.value) {
            this.setState({
                value: this.props.value
            });
        }
    }

    handleChange(e) {
        let value = e.target.value;

        this.setState({
            value
        }, () => {
            let onChange = this.props.onChange;

            if (this.props.onChange) {
                this.props.onChange(value)
            }
        });
    }

    render() {
        const {
            id, className, name, placeHolder, helper,
            autoFocus, disabled, minLength, maxLength, readOnly, required, rows, tabIndex
        } = this.props;

        return (
            <textarea
                id={id || null}
                className={className || 'form-control'}
                placeholder={placeHolder || null}

                // Attribute properties
                autoFocus={!!autoFocus}
                disabled={!!disabled}
                maxLength={maxLength || null}
                minLength={minLength || null}
                readOnly={!!readOnly}
                required={!!required}
                rows={rows || null}
                tabIndex={tabIndex || 0}

                // Controlled properties
                onChange={this.onChange}
                onPaste={this.onChange}
                value={this.state.value || ""}

            />
        )
    }
}
