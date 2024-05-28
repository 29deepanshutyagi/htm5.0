import React from 'react';

class Register extends React.Component {
    render() {
        // Check if data props is defined, if not, create an empty object
        const data = this.props.data || {};

        return (
            <div className="hero is-dark" style={{ height: '100vh' }}>
                <div className="hero-body has-text-centered">
                    <h1 className="title">Register for the Event!</h1>
                    <div className="container" style={{ width: '50vw' }}>
                        <form method="POST" action="/addperson">
                            {/* Use data props if available, otherwise, use an empty object */}
                            {Object.keys(data).map((key) => {
                                let type = 'text';
                                if (data[key] === 'number') {
                                    type = 'number';
                                } else if (key.toLowerCase() === 'email') {
                                    type = 'email';
                                }
                                return (
                                    <div className="field" key={key}>
                                        <label className="label has-text-white">{key}</label>
                                        <div className="control">
                                            <input className="input" type={type} name={key} placeholder={`Enter your ${key.toLowerCase()}`} required />
                                        </div>
                                    </div>
                                );
                            })}
                            <div className="field">
                                <div className="control has-text-centered">
                                    <input className="button is-success" type="submit" value="Submit" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
