import React, { Component } from 'react';

class Report extends Component {
    render() {
        const { data } = this.props;

        return (
            <div>
                <header>
                    <h1>Curriculum</h1>
                </header>

                <main>
                    <article>
                        <section>
                            <h2>Personal Data</h2>
                            <p>Name: {data.inputName}</p>
                            <p>Email: {data.inputEmail}</p>
                            <p>CPF: {data.inputCpf}</p>
                            <address>
                                <p>City: {data.inputCity}</p>
                                <p>State: {data.selectStates}</p>
                                <p>Address: {data.textareaAddress}</p>
                                <p>Type: {data.type}</p>
                            </address>
                        </section>
                        <section>
                            <h2>Last Job Data</h2>
                            <p>Resume: {data.textareaResume}</p>
                            <p>Role: {data.textareaRole}</p>
                            <p>Description: {data.inputRoleDesc}</p>
                        </section>
                    </article>
                </main>
            </div>
        );
    };
};

export default Report;