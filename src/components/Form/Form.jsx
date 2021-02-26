import React, { Component } from 'react';

import Input from '../Input/Input';
import Select from '../Select/Select';
import RadioGroup from '../RadioGroup/RadioGroup';

import './style.css'

class Form extends Component {
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

        return (
           <form>
                <fieldset>
                    <legend>Personal Data</legend>
                    <Input id="input-name" type="text" max="40" required={true}>Name:</Input>
                    <Input id="input-email" type="text" max="50" required={true}>Email:</Input>
                    <Input id="input-cpf" type="text" max="11" required={true}>CPF:</Input>
                    <Input id="textarea-address" type="textarea" max="200" required={true}>Address:</Input>
                    <Input id="input-city" type="text" max="28" required={true}>City:</Input>
                    <Select id="select-states" name="select-states" listOptions={options}>State:</Select>
                    <RadioGroup listRadio={radios}>Tipo:</RadioGroup>
                </fieldset>
                <fieldset>
                    <legend>Last Job Data</legend>
                    <Input id="textarea-resume" type="textarea" max="1000" required={true}>Resume></Input>
                    <Input id="textarea-role" type="textarea" max="40" required={true}>Role:</Input>
                    <Input id="input-role-description" type="text" max="500" required={true}>Role Description:</Input>
                </fieldset>
           </form>
        );
    };
};

export default Form;