import React, { Component } from 'react';
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';

const baseUrl = 'http://127.0.0.1:8000/api/login';
const cookies = new Cookies();

export default class Login extends Component {
    state = {
        form:{
            username: '',
            password: ''
        }
    }

    handleChange= e => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }


    iniciarSesion = async() => {
        console.log(this.state.form);
        await axios.post(baseUrl, {username: this.state.form.username, password: this.state.form.password})
        .then(response => {
            cookies.set('token', response.data)
            return response.data;
        })
        .then(response => {
            if (response.length > 0) {
                var respuesta=response[0];
                cookies.set('id', respuesta.id, {path: '/'});
                cookies.set('last_login', respuesta.last_login, {path: '/'});
                cookies.set('is_superuser', respuesta.is_superuser, {path: '/'});
                cookies.set('username', respuesta.username, {path: '/'});
                cookies.set('email', respuesta.email, {path: '/'});
                cookies.set('first_name', respuesta.first_name, {path: '/'});
                cookies.set('last_name', respuesta.last_name, {path: '/'});
                cookies.set('full_name', respuesta.full_name, {path: '/'});
                cookies.set('birthday', respuesta.birthday, {path: '/'});
                cookies.set('gender', respuesta.gender, {path: '/'});
                cookies.set('verification_code', respuesta.verification_code, {path: '/'});
                cookies.set('is_staff', respuesta.is_staff, {path: '/'});
                cookies.set('is_active', respuesta.is_active, {path: '/'});
                cookies.set('date_joined', respuesta.date_joined, {path: '/'});
                cookies.set('updated', respuesta.updated, {path: '/'});
                cookies.set('order', respuesta.order, {path: '/'});
                cookies.set('age', respuesta.age, {path: '/'});
                cookies.set('groups', respuesta.groups, {path: '/'});
                cookies.set('user_permissions', respuesta.user_permissions, {path: '/'});

                window.location.href = './menu';

            } else{
                alert('Username or password does not match');
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    componentDidMount() {
        if (cookies.get('username')) {
            window.location.href = './menu';
        }
    }

    render() {
        return (
            <div className='login-wrap'>
            	<div className='login-html'>
            		<input id='tab-1' type='radio' name='tab' className='sign-in' defaultChecked /><label htmlFor='tab-1' className='tab'>Login</label>
            		<input id='tab-2' type='radio' name='tab' className='for-pwd' /><label htmlFor='tab-2' className='tab'>Forgot Password</label>
            		<div className='login-form'>
            			<div className='sign-in-htm'>
            				<div className='group'>
            					<label htmlFor='user' className='label'>Username or Email</label>
            					<input
                                    type='text'
                                    className='input'
                                    name='username'
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
            					<input type='submit' className='button' value='Login' onClick={() => this.iniciarSesion()} />
            					{/* <input type='submit' className='button' value='Register' onClick={() => this.iniciarSesion()} /> */}
            				</div>
                            {/* <p className='linktext'>Don't have an account?<Link to='/signup' className='linktext'> Register</Link></p> */}
				            <div className="d-flex justify-content-center links">
                                Don't have an account?&nbsp;
                                <Link to='/signup' href="#">Register</Link>
                            </div>
            				<div className='hr'></div>
            			</div>
            			<div className='for-pwd-htm'>
            				<div className='group'>
            					<label htmlFor='user' className='label'>Username or Email</label>
            					<input
                                    type='text'
                                    className='input'
                                    name='username'
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
