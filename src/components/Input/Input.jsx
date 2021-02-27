import React, { Component } from 'react';

import './style.css';

class Input extends Component {

    cityValidate = city => city.match(/^[0-9]/);
    

    render() {
        const { id, type, max, required, children, value, handleOnChange, handleOnBlur } = this.props;


        
        return (
            <div className="container-input">
                <label htmlFor={id}>
                    {children}
                </label>
                    {(()=> {
                        if (type === 'textarea') return (
                            <textarea 
                                id={id} name={id} value={value} maxLength={max}
                                required={required} onChange={handleOnChange}
                            />
                        ) 
                        
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
        );
    };
};

export default Input;