import React, { Fragment } from 'react';


const FormInput = ({label, onChange, name, options = [], erros = [], defaultValue, ...props}) => (
    <div className="field">
        <label className="label">{label}</label>
        <div className="control">
            { options.map( (item, index) => 
                <Fragment key={index}>
                    <input
                        class="is-checkradio"
                        id={`radio-form-${name}`}
                        type="radio"
                        value={item.value}
                        name={name}
                        onChange={onChange}
                        checked={item.selected || item.value === props.defaultValue }
                        {...props} />
                    <label for={`radio-form-${name}`}> {item.label} </label>
                </Fragment>
            )}
        </div>
    </div>
);

export default FormInput;