import React, { Component } from 'react';
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Cookies from 'universal-cookie';

const baseUrl = 'http://127.0.0.1:8000/api/encora_workplace/usersuser/';
const cookies = new Cookies();

class Login extends Component {
    state = {
        form:{
            email: '',
            password: ''
        }
    }

    handleChange=async e=> {
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion=async() => {
        await axios.get(baseUrl, {params: {email: this.state.form.email, password: this.state.form.password}})
        .then(response => {
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
                alert(`Welcome ${respuesta.first_name}`);

                window.location.href = './menu';

            } else{
                alert('Email or password does not match');
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    componentDidMount() {
        if (cookies.get('email')) {
            window.location.href = './menu';
        }
    }

    render() {
        return (
        <div className='containerPrincipal'>
            <div className='containerSecundario'>
                <div className='form-group'>
                    <label>Email: </label>
                    <br />
                    <input
                        type='text'
                        className='form-control'
                        name='email'
                        onChange={this.handleChange}
                    />
                    <br />
                    <label>Password: </label>
                    <br />
                    <input
                        type='password'
                        className='form-control'
                        name='password'
                        onChange={this.handleChange}
                    />
                    <br />
                    <button className='btn btn-primary' onClick={() => this.iniciarSesion()} >Login</button>
                </div>
            </div>
        </div>
    );
  }
}

export default Login;
