import React, { Fragment } from 'react';
import { mapObject } from 'underscore'

const mapStateToArray = (state) => {
    let arr = [];
    mapObject( state, (val, key) => {
        arr.push({
            [key]: val
        })
    })
    return arr;
}

const Finish = (props) => {
    const FORM_DATA = props.state.FORM_DATA;
    return(
        <div className="form-finish">
            <h1 className="title">Finish</h1>

            <div>   
                {
                    mapStateToArray(FORM_DATA).map( (item, index) => console.log(item) )
                }

            </div>
            
        </div>
        

    )
}

export default Finish;