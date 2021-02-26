import React, { Component } from 'react';

class Radio extends Component {
    render() {
        const { id, name, value, children } = this.props;

        return (
            <div className="container-radio">
                <label htmlFor={id}>
                    {children}
                    <input id={id} type="radio" name={name} value={value}/>
                </label>
            </div>
        );
    };
};

export default Radio;