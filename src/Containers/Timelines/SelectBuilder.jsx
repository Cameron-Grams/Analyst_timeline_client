import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from '../../Components/Button/button';

let BuildOptions = ( props ) => {
    const { handleSubmit } = props;

    return(      
        <form className={ props.className } onSubmit={ handleSubmit }>

            <Field name="selectTimeline" component="select">
                <option key={ 888 } value={ "Error" }>Please select timeline</option>
                { props.optionsArray.map( ( option, i ) => 
                    <option key={ i } value={ option._id } >
                      { option.title } 
                    </option> ) 
                }
            </Field>

           <Button
             className={ "regularButton" } 
             divStyling={ "timelineOptions"}
             clickHandler={ handleSubmit }
             sendPath={ "/dashboard" }
             buttonLable={ 'Select Timeline' } /> 
        </form>
    )
}

BuildOptions = reduxForm( {
    form: "stateMappedToTimelines"
} )( BuildOptions ); 

export default BuildOptions; 
