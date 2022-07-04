import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';
import axios from 'axios';

import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../css/Navbar.module.css";
import logo from "../assets/imgs/logo.png";

const cookies = new Cookies();

class NavBar extends Component {

  logout = () => {
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
  };

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
  };

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className={styles.navbar}>
        <Container>
          <Link to={"/newreservationpage"}>
            <Navbar.Brand>
              <img src={logo} alt="logotype" />
              Encora reserves
            </Navbar.Brand>
          </Link>
          <Navbar.Text className="justify-items-center">Welcome {cookies.get('first_name')}</Navbar.Text>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {cookies.get('is_superuser') === true ? (
                <Link to={"/admin"} className={styles.navbar_target}>
                  Admin
                </Link>
              ) : null}
            </Nav>
            <Nav>
              <Link className={styles.navbar_target} to={"/homepage"}>
                Home
              </Link>
              <Link className={styles.navbar_target} to={"/myreservations"}>
                My bookings
              </Link>
              <Nav.Link className={styles.navbar_target} to={'/'} onClick={() => this.logout(true)}>
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container >
      </Navbar >
    );
  };
}

export default NavBar;
