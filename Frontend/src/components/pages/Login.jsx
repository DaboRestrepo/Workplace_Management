import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';

import styles from "../../css/Login.module.css";
import logo from "../../assets/imgs/logo.png";

const baseUrl = 'http://127.0.0.1:8000/api/login';
const cookies = new Cookies();


export default class Login extends Component {
  state = {
    form: {
      username: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }


  iniciarSesion = async () => {
    console.log(this.state.form);
    await axios.post(baseUrl, { username: this.state.form.username, password: this.state.form.password })
      .then(response => {
        cookies.set('token', response.data)
        return response.data;
      })
      .then(response => {
        if (response.length > 0) {
          var respuesta = response[0];
          cookies.set('id', respuesta.id, { path: '/' });
          cookies.set('last_login', respuesta.last_login, { path: '/' });
          cookies.set('is_superuser', respuesta.is_superuser, { path: '/' });
          cookies.set('username', respuesta.username, { path: '/' });
          cookies.set('email', respuesta.email, { path: '/' });
          cookies.set('first_name', respuesta.first_name, { path: '/' });
          cookies.set('last_name', respuesta.last_name, { path: '/' });
          cookies.set('full_name', respuesta.full_name, { path: '/' });
          cookies.set('birthday', respuesta.birthday, { path: '/' });
          cookies.set('gender', respuesta.gender, { path: '/' });
          cookies.set('verification_code', respuesta.verification_code, { path: '/' });
          cookies.set('is_staff', respuesta.is_staff, { path: '/' });
          cookies.set('is_active', respuesta.is_active, { path: '/' });
          cookies.set('date_joined', respuesta.date_joined, { path: '/' });
          cookies.set('updated', respuesta.updated, { path: '/' });
          cookies.set('order', respuesta.order, { path: '/' });
          cookies.set('age', respuesta.age, { path: '/' });
          cookies.set('groups', respuesta.groups, { path: '/' });
          cookies.set('user_permissions', respuesta.user_permissions, { path: '/' });

          window.location.href = './menu';

        } else {
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
      <div className={styles.container_login}>
        <div className={styles.login_box}>

          <img src={logo} alt="na sala logo" />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Enter your email address"
            autoComplete="on"
            name="emai"
            id="emai"
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            id="password"
            onChange={this.handleChange}
          />
          <div className={styles.btn_area}>
            <button className={styles.btn} onClick={() => this.iniciarSesion(true)}>Login</button>
          </div>
          <div className="d-flex justify-content-center links">
            Don't have an account?&nbsp;
            <Link to='/signup' href="#">Register</Link>
          </div>
        </div>
      </div>
    );
  }
}

// return (
//   <div className={styles.container_login}>
//     <div className={styles.login_box}>

//       <img src={logo} alt="na sala logo" />
//       <label htmlFor="email">Email</label>
//       <input
//         type="text"
//         placeholder="Enter your email address"
//         autoComplete="on"
//         name="emai"
//         id="emai"
//         onChange={handleChange}
//       />
//       <label htmlFor="password">Password</label>
//       <input
//         type="password"
//         placeholder="Enter your password"
//         id="password"
//         onChange={handleChange}
//       />
//       <div className={styles.btn_area}>
//         <button className={styles.btn} onClick={() => iniciarSesion(true)}>Login</button>
//       </div>
//       <div className="d-flex justify-content-center links">
//         Don't have an account?&nbsp;
//         <Link to='/signup' href="#">Register</Link>
//       </div>
//     </div>
//   </div>
// );