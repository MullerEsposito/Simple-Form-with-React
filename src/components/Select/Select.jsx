import React, { Component } from 'react';

import './style.css';

class Select extends Component {
    constructor() {
        super();
        this.state = {
            listStates: []
        }
    }

    componentDidMount() {
        const api = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/';
        this.getStates(api).then(listStates => this.setState({ listStates: listStates}));
    }

    getStates = async api => {
        const listStatesJson = await fetch(api).then(res => res.json());
        const listStates = listStatesJson.map(state => (
            { value: state.sigla, label: state.nome }
            ));
        listStates.unshift({ value: "", label: "SELECT STAGE" });
                        
        return listStates;        
    }

    render() {
        const { id, name, value, children, handleOnChange } = this.props;
        const { listStates } = this.state;
        

        const options = listStates.map(({ value, label }) => 
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