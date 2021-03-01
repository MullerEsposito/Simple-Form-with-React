import React, { Component } from 'react';

import Tooltip from '../Tooltip/Tooltip';

import './style.css';

class Input extends Component {
    constructor() {
        super();
        this.state = {
            noAlert: true,
        }
    }

    cityValidate = city => city.match(/^[0-9]/);

    handleOnMouseEnter = ({ target: { name }}) => {
        const { noAlert } = this.state;

        if (name === 'textareaRoleDesc' && noAlert ) this.setState({noAlert: false});
    }

    handleOnFocus = () => {
        document.getElementById('tooltip')?.remove();
    }
    

    render() {
        const { id, type, max, required, children, value, handleOnChange, handleOnBlur } = this.props;
        const { noAlert } = this.state;

        
        return (
            <>
            <link rel="stylesheet" href="path/to/balloon.css"></link>
            <div className="container-input">
                <label htmlFor={id}>
                    {children}
                </label>
                    {(()=> {
                        if (type === 'textarea') {
                            return (
                                <>
                                    {noAlert || <Tooltip className="tooltip" id="tooltip">Fill careful this info!</Tooltip>}
                                <textarea 
                                    id={id} name={id} value={value} maxLength={max}
                                    required={required} onChange={handleOnChange}
                                    onMouseEnter={this.handleOnMouseEnter}
                                    onFocus={this.handleOnFocus} rows="6"
                                />
                                </>
                           ) 
                        }                            
                        
                        
                        return <input 
                                    id={id} name={id} type={type} 
                                    maxLength={max} required={required}
                                    onBlur={ id === 'inputCity' 
                                        ? () => { handleOnBlur(this.cityValidate(value)); }
                                        : () => {} }
                                    onChange={handleOnChange} value={value}
                                />;
                    })()}
            </div>
           </>
        );
    };
};

export default Input;