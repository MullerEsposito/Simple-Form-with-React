import React, { Component } from 'react';

import './style.css';

class Select extends Component {
    render() {
        const { id, name, listOptions, children } = this.props;
        const options = listOptions.map(({ value, label }) => 
            <option key={value} value={value}>{label}</option>);

        return (
            <div className="container-select">
                <label htmlFor={id}> {children} </label>
                <select name={name} id={id}> {options} </select>
            </div>
        );
    };
};

export default Select;