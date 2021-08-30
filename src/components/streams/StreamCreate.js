import React from 'react';
import { Field, reduxForm } from 'redux-form';


class StreamCreate extends React.Component {


    renderError({ touched, error }){
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    };

    renderInput =({ input, label, meta }) => {

        const fieldClassName = `field ${ meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={fieldClassName}>
                <label>{ label }</label>
                <input {...input } autocomplete="off" />
                {this.renderError(meta)}
            </div>           
        );
    };

    onSubmit(formValues){
        console.log(formValues);
    }


    render(){
        return (
            <form 
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form error"
            >
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }; 
};


const validate = (formValues) => {
    const error = {};

    if(!formValues.title){
        error.title = "You must Enter a Title";
    }
    if(!formValues.description){
        error.description = "You must Enter a Description";
    }

    return error;
}


export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);