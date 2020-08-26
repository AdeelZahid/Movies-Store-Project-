import React from "react";
import Form from './common/form';
import Joi from 'joi';

class LoginForm extends Form {

    state={
      data: {username:"", password:""},
      errors: {}
    }

    schema = { 
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password',)
    }
    
    doSubmit = () => {
        // call the server
        console.log("Submmitted ")
    }

    render() {
      
    return (
      <div>
          <h1>Login</h1>
        {/* form>(div.form-group>label+input.form-control)*2 */}
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Login')}
        </form>
      </div>
    );
  }
}

export default LoginForm;
