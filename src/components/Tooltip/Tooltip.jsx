import React, { Component } from 'react';

import './style.css'

class Tooltip extends Component {
    render() {
        const { id, children } = this.props;

        return (
           <div id={id} className="container-tooltip">
                 {children}
           </div>
        );
    };
};

export default Tooltip;