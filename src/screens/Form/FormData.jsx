import React from 'react';
import { Link }  from 'react-router-dom';
import fieldsTree from '../../fields.json';

const FormDadosPF = ({onChange, handleSetTypePerson, renderFields, ...props}) => {

    const FIELDS = props.state.PERS_TYPE === 0 ? fieldsTree.pf_fields : fieldsTree.pj_fields
    return(
        <div className="form-data-pf">
            <div className="columns is-centered">
                <div className="column is-8">
                    <h2 className="title is-2">Informações Cadastrais</h2>

                    <div className="columns is-multiline">
                    { renderFields( FIELDS) }
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