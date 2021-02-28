import React, { Component } from 'react';

import Input from '../Input/Input';
import Select from '../Select/Select';
import RadioGroup from '../RadioGroup/RadioGroup';
import Report from "../Report/Report";

import './style.css'

class Form extends Component {
    constructor(){
        super();
        this.state = {
            showReport: false
        }
        
    }

    handleOnChange = ({ target : { name, value } }) => {
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState((previous) => ({  showReport: !previous.showReport }));
    }

    retrievesValidationCity = hasError => hasError && this.setState({ inputCity: ""});
    

    render() {
        const radios = [
            { id: "radioHouse", name: "type", value: "House", label: "House:"},
            { id: "radioApartment", name: "type", value: "Apartment", label: "Apartment:"}
        ]
        const { 
                inputName="", inputEmail="", inputCpf="", inputCity="", inputRoleDesc="", inputRadioGroup,
                textareaAddress, selectStates, textareaResume, textareaRole, showReport  } = this.state;

        return (
            <div>
                { showReport || 
                    <form onSubmit={this.handleSubmit}>
                        <div className="container-fildsets">
                            <fieldset>
                                <legend>Personal Data</legend>
                                <Input id="inputName" type="text" max="40" required={true} value={inputName.toUpperCase()} handleOnChange={this.handleOnChange} >Name:</Input>
                                <Input id="inputEmail" type="text" max="50" required={true} value={inputEmail} handleOnChange={this.handleOnChange}>Email:</Input>
                                <Input id="inputCpf" type="text" max="11" required={true} value={inputCpf} handleOnChange={this.handleOnChange}>CPF:</Input>
                                <Input id="textareaAddress" type="textarea" max="200" required={true} value={textareaAddress} handleOnChange={this.handleOnChange}>Address:</Input>
                                <Input id="inputCity" type="text" max="28" required={true} value={inputCity} handleOnChange={this.handleOnChange} handleOnBlur={this.retrievesValidationCity}>City:</Input>
                                <Select id="selectStates" name="selectStates" value={selectStates} handleOnChange={this.handleOnChange}>State:</Select>
                                <RadioGroup id="inputRadioGroup" listRadio={radios} checked={inputRadioGroup} handleOnChange={this.handleOnChange}>Type:</RadioGroup>
                            </fieldset>
                            <fieldset>
                                <legend>Last Job Data</legend>
                                <Input id="textareaResume" type="textarea" max="1000" required={true} value={textareaResume} handleOnChange={this.handleOnChange}>Resume</Input>
                                <Input id="textareaRole" type="textarea" max="40" required={true} value={textareaRole} handleOnChange={this.handleOnChange}>Role:</Input>
                                <Input id="inputRoleDesc" type="text" max="500" required={true} value={inputRoleDesc} handleOnChange={this.handleOnChange}>Role Description:</Input>
                            </fieldset>
                        </div>
                        <button>Submit</button>
                    </form>
                }
                { showReport && 
                    <div>
                        <Report data={this.state}/> 
                        <input type="button" onClick={this.handleSubmit} value="Back" />
                    </div>
                }
            </div>
        );
    };
};

export default Form;