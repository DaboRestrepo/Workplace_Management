import React, { Component } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default class Menu extends Component {
    cerrarSesion=()=>{
        cookies.remove('id', {path: '/'});
        cookies.remove('last_login', {path: '/'});
        cookies.remove('is_superuser', {path: '/'});
        cookies.remove('username', {path: '/'});
        cookies.remove('email', {path: '/'});
        cookies.remove('first_name', {path: '/'});
        cookies.remove('last_name', {path: '/'});
        cookies.remove('full_name', {path: '/'});
        cookies.remove('birthday', {path: '/'});
        cookies.remove('gender', {path: '/'});
        cookies.remove('verification_code', {path: '/'});
        cookies.remove('is_staff', {path: '/'});
        cookies.remove('is_active', {path: '/'});
        cookies.remove('date_joined', {path: '/'});
        cookies.remove('updated', {path: '/'});
        cookies.remove('order', {path: '/'});
        cookies.remove('age', {path: '/'});
        cookies.remove('groups', {path: '/'});
        cookies.remove('user_permissions', {path: '/'});

        window.location.href = './';
    }

    componentDidMount() {
        if (!cookies.get('email')) {
            window.location.href = './';
        }
    }

    render() {
        console.log('id: ' + cookies.get('id'));
        console.log('last_login: ' + cookies.get('last_login'));
        console.log('is_superuser: ' + cookies.get('is_superuser'));
        console.log('username: ' + cookies.get('username'));
        console.log('email: ' + cookies.get('email'));
        console.log('first_name: ' + cookies.get('first_name'));
        console.log('last_name: ' + cookies.get('last_name'));
        console.log('full_name: ' + cookies.get('full_name'));
        console.log('birthday: ' + cookies.get('birthday'));
        console.log('gender: ' + cookies.get('gender'));
        console.log('verification_code: ' + cookies.get('verification_code'));
        console.log('is_staff: ' + cookies.get('is_staff'));
        console.log('is_active: ' + cookies.get('is_active'));
        console.log('date_joined: ' + cookies.get('date_joined'));
        console.log('updated: ' + cookies.get('updated'));
        console.log('order: ' + cookies.get('order'));
        console.log('age: ' + cookies.get('age'));
        console.log('groups: ' + cookies.get('groups'));
        console.log('user_permissions: ' + cookies.get('user_permissions'));
        return (
            <div>
                Menu Principal

                <br />
                <button onClick={()=>this.cerrarSesion()}>Log Out</button>
            </div>
        );
    }
}
