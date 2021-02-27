import React, { Component } from 'react';

import './style.css';

class Input extends Component {
    render() {
        const { id, type, max, required, children, handleOnChange, value } = this.props;
        
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
                                    onChange={handleOnChange} value={value}
                                />;
                    })()}
            </div>
        );
    };
};

export default Input;