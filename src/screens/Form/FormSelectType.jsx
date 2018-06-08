import React from 'react';
import { Link }  from 'react-router-dom';

import FormInput from '../../components/FormInput';
import FormSelect from '../../components/FormSelect';
import FormRadio from '../../components/FormRadio';


const FormSelectType = ({ onChange, handleSetTypePerson,  ...props }) => {
    
    return(
        <div className="form-select-type">


            <div className="columns is-centered">
                <div className="column is-8">
                    <h2 className="title is-2">Sobre você</h2>

                    <FormSelect label="Como conheceu a Pagg?" name="conheceu" onChange={onChange} options={ 
                        [
                            {
                                label: "Noticias",
                                value: "noticias",
                            },
                            {
                                label: "Redes Sociais",
                                value: "internet",
                            },
                            {
                                label: "TV",
                                value: "tv",
                            },
                            {
                                label: "Radio",
                                value: "radio",
                            }
                        ]
                    }   required  />

                    <FormInput name="nome" label="Nome" onChange={onChange} required />
                    <div className="columns">
                        <div className="column">
                            <FormInput name="email" type="email" label="E-mail" onChange={onChange} required />
                        </div>
                        <div className="column">
                            <FormInput name="email" type="email" label="Confirmar E-mail" onChange={onChange} required  />
                        </div>  
                    </div>

                    <div className="columns">
                        <div className="column">
                            <FormInput name="password" type="password" label="Senha" onChange={onChange} required />
                        </div>
                        <div className="column">
                            <FormInput name="password" type="password" label="Comfirmar Senha" onChange={onChange} required />
                        </div>  
                    </div>

                    <FormRadio label="Você é" name="person"
                        options={[
                            {
                                value: 0,
                                selected: true,
                                label: "Pessoa Fisica"
                            },
                            {
                                value: 1,
                                label: "Pessoa Juridica"
                            }
                        ]}
                        onChange={handleSetTypePerson}
                    />

                    <hr/>

                    <div class="buttons ">
                        <Link to="/" className="button">
                            <span className="icon is-small">
                                <i className="fas fa-angle-double-left"></i>
                            </span>
                            <span>Passo Anterior</span>
                        </Link>
                        <Link to="/cadastro/dados" className="button is-primary">
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

export default FormSelectType;