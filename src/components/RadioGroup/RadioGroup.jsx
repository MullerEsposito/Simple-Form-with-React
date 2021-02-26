import React, { Component } from 'react';

import Radio from './Radio';
import './style.css';

class RadioGroup extends Component {
    render() {
        const { listRadio, children } = this.props;
        const radios = listRadio.map(({id, name, value, label}) => 
            <Radio key={id} id={id} name={name} value={value}>{label}</Radio>)


        return (
            <div className="container-radio-group">
                <label htmlFor="input-radio-tipo">
                    {children}
                </label>
                <div className="container-radios">
                    {radios}
                </div>
            </div>
        );
    };
};

export default RadioGroup;