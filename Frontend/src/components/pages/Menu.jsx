import axios from 'axios';
import React, { Component } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default class Menu extends Component {

  cerrarSesion = () => {
    cookies.remove('id', { path: '/' });
    cookies.remove('last_login', { path: '/' });
    cookies.remove('is_superuser', { path: '/' });
    cookies.remove('username', { path: '/' });
    cookies.remove('email', { path: '/' });
    cookies.remove('first_name', { path: '/' });
    cookies.remove('last_name', { path: '/' });
    cookies.remove('full_name', { path: '/' });
    cookies.remove('birthday', { path: '/' });
    cookies.remove('gender', { path: '/' });
    cookies.remove('verification_code', { path: '/' });
    cookies.remove('is_staff', { path: '/' });
    cookies.remove('is_active', { path: '/' });
    cookies.remove('date_joined', { path: '/' });
    cookies.remove('updated', { path: '/' });
    cookies.remove('order', { path: '/' });
    cookies.remove('age', { path: '/' });
    cookies.remove('groups', { path: '/' });
    cookies.remove('user_permissions', { path: '/' });

    window.location.href = './';
  }

  componentDidMount() {
    let config = {
      headers: {
        Authorization: 'Token ' + cookies.get('token'),
      }
    }
    axios.get('http://127.0.0.1:8000/api/user/', config)
      .then(response => {
        console.log(response.data);
      })
    if (!cookies.get('email')) {
      window.location.href = './';
    }
  }

  render() {
    return (
      <div>
        Menu Principal

        <br />
        <button onClick={() => this.cerrarSesion()}>Log Out</button>
      </div>
    );
  }
}
