import React from 'react';
import Joi from 'joi';
import Form from './common/form';

class RegisterForm extends Form {
    state = {
        data: {username:"", password:"", name:""},
        errors: {}
      }

      schema={
          username: Joi.string().required().email().label("Username"),
          password: Joi.string().required().min(5).max(15).label("Password"),
          name: Joi.string().required().min(3).label("Name")
      }

      doSubmit = () =>{

        console.log("Registeration Submitted ... ")
      }

    render() { 
        return ( 
            <div>
                <h1>Register</h1>
                <form  onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Email")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderInput("name", "Name")}
                    {this.renderButton("Register")}
                </form>
            </div>
         );
    }
}
 
export default RegisterForm;


