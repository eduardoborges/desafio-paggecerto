import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// steps of form
import FormSelectType from './FormSelectType'
import FormData from './FormData';
import FormDataMoneyReceipt from "./FormDataMoneyReceipt";
import FormBankInfo from "./FormBankInfo";
import FormTerms from "./FormTerms";
import FormFinish from "./FormFinish";

// small components 
import StepsSwitch from '../../components/StepSwitch';
import FormInput from '../../components/FormInput';
import FormSelect from '../../components/FormSelect';
import FormRadio from '../../components/FormRadio';

export default
class FormContainer extends Component {

    state = {
        FORM_DATA: {},
        FORM_ERRS: [],
        PERS_TYPE: 0,
        CURR_STEP: 1
    }

    onSubmit = () => {
        console.log('not implemented yet.')
    }

    /**
     * Receive an event with data input and change the state
     * @param {Event} event The input event
     */
    handleSetTypePerson = (event) => {
        const { value } = event.target;
        console.log( value )
        this.setState({ PERS_TYPE: Number(value) })
    }

    /**
     * Receive an event with data input and change the state
     * @param {Event} event The input event
     */
    onChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;

        this.setState( prevState => ({
                FORM_DATA: {
                    ...prevState.FORM_DATA,
                    [name]:value
                }
            })
        );
    }

    renderFields = (fields = []) => {
        const FORM_DATA = this.state.FORM_DATA;
        return(
            fields.map( (item, i) => (
                <div className="column is-6" key={i}>
                    { item.type === 'text' &&
                        <FormInput {...item} onChange={this.onChange} defaultValue={FORM_DATA[item.name]} required />
                    }
    
                    { item.type === 'date' &&
                        <FormInput {...item} onChange={this.onChange} defaultValue={FORM_DATA[item.name]} required />
                    }
    
                    { item.type === 'number' &&
                        <FormInput {...item} onChange={this.onChange} defaultValue={FORM_DATA[item.name]} required />
                    }
    
                    { item.type === 'select' &&
                       <FormSelect {...item} onChange={this.onChange} defaultValue={FORM_DATA[item.name]} required  />
                    }
    
                    { item.type === 'radio' &&
                        <FormRadio {...item} onChange={this.onChange} defaultValue={FORM_DATA[item.name]} />
                    }
                </div>
            ))
        )
    }


    renderFormRoutes = () => {
        const { PERS_TYPE } = this.state;
        return (
            <Switch>
                <Route path="/cadastro" exact render={ ()=> <FormSelectType {...this} /> } />
                <Route path="/cadastro/dados" render={ ()=> <FormData {...this} />  } />
                <Route path="/cadastro/repasse" render={ ()=> <FormDataMoneyReceipt {...this} /> } />
                <Route path="/cadastro/banco" render={ ()=> <FormBankInfo {...this} /> } />
                <Route path="/cadastro/termos" render={ ()=> <FormTerms {...this} /> } />
                <Route path="/cadastro/finalizado" render={ ()=> <FormFinish {...this} /> } /> 
            </Switch>
        )
    }

    render = () => {
        const { FORM_DATA, FORM_ERRS, CURR_STEP } = this.state;
        return(
            <div className="app-form">
                <div className="hero is-fullheight is-light">
                    <div className="hero-header">
                        <div className="container">
                            <StepsSwitch  {...this} />
                        </div>
                    </div>
                    <div className="hero-body"> 
                        <div className="container">
                            { this.renderFormRoutes() }
                        </div>
                    </div>
                </div>
            </div>
        );  
    }

}