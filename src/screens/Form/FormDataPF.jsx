import React from 'react';
import { Link }  from 'react-router-dom';
import fieldsTree from '../../fields.json';

import FormInput from '../../components/FormInput';
import FormSelect from '../../components/FormSelect';
import FormRadio from '../../components/FormRadio';


const FormDadosPF = ({onChange, handleSetTypePerson, renderFields, ...props}) => {
    const FORM_STATE = props.state.FORM_DATA;
    console.log(FORM_STATE)
    return(
        <div className="form-data-pf">

        <div className="columns is-centered">
            <div className="column is-8">
                <h2 className="title is-2">Informações Cadastrais</h2>

                <div className="columns is-multiline">
                { renderFields( fieldsTree.pf_fields ) }
                </div>

                

                <hr/>

                <div class="buttons ">
                    <Link to="/cadastro/" className="button">
                        <span className="icon is-small">
                            <i className="fas fa-angle-double-left"></i>
                        </span>
                        <span>Passo Anterior</span>
                    </Link>
                    <Link to="/cadastro/repasse" className="button is-primary">
                        <span>Próximo Passo</span>
                        <span className="icon is-small">
                            <i className="fas fa-angle-double-right"></i>
                        </span>
                    </Link>
                </div>
                
            </div>
        </div>
    </div>

    )
}

export default FormDadosPF;