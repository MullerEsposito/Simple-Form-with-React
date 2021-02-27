import React, { Component } from 'react';

import Input from '../Input/Input';
import Select from '../Select/Select';
import RadioGroup from '../RadioGroup/RadioGroup';

import './style.css'

class Form extends Component {
    constructor(){
        super();
        this.state = {
        }
        
    }

    handleOnChange = ({ target : { name, value } }) => {
        console.log(`handlOnChange...`);
        this.setState({
            [name]: value
        })
    }

    render() {
        const options = [
            { label: "SELECT STAGE", value: "" },
            { label: "MG", value: "MINAS GERAIS" },
            { label: "MA", value: "MARANHÃO" },
            { label: "BSB", value: "BRASÍLIA" },
        ];

        const radios = [
            { id: "radio-casa", name: "tipo", value: "Casa", label: "Casa:"},
            { id: "radio-apartamento", name: "tipo", value: "Apartamento", label: "Apartamento:"}
        ]
        const { 
                inputName, inputEmail, inputCpf, inputCity, inputRoleDesc,
                textareaAddress, selectStates, textareaResume, textareaRole  } = this.state;

        return (
           <form>
                <fieldset>
                    <legend>Personal Data</legend>
                    <Input id="inputName" type="text" max="40" required={true} value={inputName} handleOnChange={this.handleOnChange} >Name:</Input>
                    <Input id="inputEmail" type="text" max="50" required={true} value={inputEmail} handleOnChange={this.handleOnChange}>Email:</Input>
                    <Input id="inputCpf" type="text" max="11" required={true} value={inputCpf} handleOnChange={this.handleOnChange}>CPF:</Input>
                    <Input id="textareaAddress" type="textarea" max="200" required={true} value={textareaAddress} handleOnChange={this.handleOnChange}>Address:</Input>
                    <Input id="inputCity" type="text" max="28" required={true} value={inputCity} handleOnChange={this.handleOnChange}>City:</Input>
                    <Select id="selectStates" name="select-states" listOptions={options} handleOnChange={this.handleOnChange}>State:</Select>
                    <RadioGroup listRadio={radios} handleOnChange={this.handleOnChange}>Tipo:</RadioGroup>
                </fieldset>
                <fieldset>
                    <legend>Last Job Data</legend>
                    <Input id="textareaResume" type="textarea" max="1000" required={true} value={textareaResume} handleOnChange={this.handleOnChange}>Resume</Input>
                    <Input id="textareaRole" type="textarea" max="40" required={true} value={textareaRole} handleOnChange={this.handleOnChange}>Role:</Input>
                    <Input id="inputRoleDesc" type="text" max="500" required={true} value={inputRoleDesc} handleOnChange={this.handleOnChange}>Role Description:</Input>
                </fieldset>
           </form>
        );
    };
};

export default Form;