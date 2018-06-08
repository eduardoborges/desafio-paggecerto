import React from 'react';


const FormInput = ({label, onChange, name, erros = [], ...props}) => (
    <div className="field">
        <label className="label">{label}</label>
        <div className="control">
            <input className="input" name={name} type="text" onChange={onChange} {...props} />
            { erros[name] && <p class="help">{erros[name]}</p>  }
        </div>
    </div>
);

export default FormInput;