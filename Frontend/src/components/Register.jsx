import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Register extends Component {
    state = {
        form:{
            email: '',
            password: ''
        }
    }

    handlechange= e => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }
    
    render() {
        return (
            <div className='login-wrap'>
            	<div className='login-html'>
            		<input id='tab-1' type='radio' name='tab' className='sign-in' defaultChecked /><label htmlFor='tab-1' className='tab'>Sign In</label>
            		<input id='tab-2' type='radio' name='tab' className='for-pwd' /><label htmlFor='tab-2' className='tab'>Forgot Password</label>
            		<div className='login-form'>
            			<div className='sign-in-htm'>
            				<div className='group'>
            					<label htmlFor='user' className='label'>Username or Email</label>
            					<input
                                    type='text'
                                    className='input'
                                    name='email'
                                    onChange={this.handleChange}
                                />
            				</div>
            				<div className='group'>
            					<label htmlFor='pass' className='label'>Password</label>
            					<input
                                    type='password'
                                    className='input'
                                    name='password'
                                    onChange={this.handleChange}
                                />
            				</div>
            				<div className='group'>
            					<input type='submit' className='button' value='Sign In' onClick={() => this.iniciarSesion()} />
            					{/* <input type='submit' className='button' value='Register' onClick={() => this.iniciarSesion()} /> */}
            				</div>
                            <p className='linktext'>Already have an account?<Link to='/' className='linktext'> Login</Link></p>
            				<div className='hr'></div>
            			</div>
            			<div className='for-pwd-htm'>
            				<div className='group'>
            					<label htmlFor='user' className='label'>Username or Email</label>
            					<input
                                    type='text'
                                    className='input'
                                    name='email'
                                    onChange={this.handleChange}
                                />
            				</div>
            				<div className='group'>
            					<input type='submit' className='button' value='Reset Password' />
            				</div>
            				<div className='hr'></div>
                    	</div>
                    </div>
            	</div>
            </div>
        );
    }

}
