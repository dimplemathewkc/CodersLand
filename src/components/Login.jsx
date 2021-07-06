import React, { Component } from 'react';
import Input from './common/Input';
class Login extends Component {
    state = { 
        account  :{
            username:'',
            password:''
        },
        errors:{

        }
     }
     handleChange = ({currentTarget: input}) => {
         const account = {...this.state.account}
         account[input.name] = input.value;
         this.setState({account})

     }
     validator = () => {
         const errors = {}
         if(this.state.account.username.trim()==="")
            errors.username="Username is required."
         if(this.state.account.password.trim()==="")
            errors.password="Password is required."
        return Object.keys(errors).length === 0 ? null : errors

         
     }
     handleSubmit = (e) => {
  
        e.preventDefault()
        const errors = this.validator()
        console.log(errors)
        this.setState({errors})
        
     }
    render() { 
        return ( 
            <div className="container">
                <div className="jumbotron">
                    <h2 className="pb-2" style={{'text-align':'center'}}>Welcome to <code>Coder</code><i>Land</i></h2>
                    <div className="container">
                        <div className="card m-2 p-3">
                        <form onSubmit={this.handleSubmit}>
                            <Input name="username" 
                                type="text"
                                onChange={this.handleChange} 
                                value = {this.state.account.username}
                                label="Username"
                                error = {this.state.errors.username}
                                placeholder="Enter the email or username"
                                />
                            <Input name="password" 
                                type='password'
                                onChange={this.handleChange} 
                                value={this.state.account.password}
                                label="Password"
                                error = {this.state.errors.password}
                                placeholder = "Password"
                                />
                            <button type="submit" className="btn btn-secondary">Submit</button>
                        </form>
                </div>
                    </div>
                </div>
                
            </div>
         );
    }
}
 
export default Login;