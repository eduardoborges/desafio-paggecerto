import React from 'react';


const FormInput = ({label, onChange, name, options = [], erros = [], ...props}) => (
    <div className="field">
        <label className="label">{label}</label>
        <div className="control">
            <div class="select is-fullwidth">
                <select {...props} onChange={onChange}>
                    { options.map( (item, index) => (
                        <option key={index} value={item.value}>{item.label}</option>
                    ) ) }
                </select>
            </div>
        </div>
    </div>
);

export default FormInput;