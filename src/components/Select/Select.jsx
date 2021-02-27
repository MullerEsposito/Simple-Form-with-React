import React, { Component } from 'react';

import './style.css';

class Select extends Component {
    render() {
        const { id, name, value, listOptions, children, handleOnChange } = this.props;
        const options = listOptions.map(({ value, label }) => 
            <option key={value} value={value}>{label}</option>);

        return (
            <div className="container-select">
                <label htmlFor={id}> {children} </label>
                <select value={value} name={name} id={id} onChange={handleOnChange}> 
                    {options} 
                </select>
            </div>
        );
    };
};

export default Select;