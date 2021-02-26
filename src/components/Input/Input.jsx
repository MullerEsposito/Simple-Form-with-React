import React, { Component } from 'react';

import './style.css';

class Input extends Component {
    render() {
        const { id, type, max, required, children } = this.props;

        return (
            <div className="container-input">
                <label htmlFor={id}>
                    {children}
                </label>
                    {(()=> {
                        if (type === 'text') {
                            return <input id={id} type={type} maxLength={max} required={required}/>;
                        } else if (type === 'textarea') {
                            return <textarea id={id} maxLength={max} required={required}/>
                        }
                    })()}
            </div>
        );
    };
};

export default Input;