import React, { Component } from 'react';

class Radio extends Component {
    render() {
        const { id, name, value, children, handleOnChange } = this.props;

        return (
            <div className="container-radio">
                <label htmlFor={id}>
                    {children}
                    <input id={id} type="radio" name={name} value={value} onChange={handleOnChange}/>
                </label>
            </div>
        );
    };
};

export default Radio;