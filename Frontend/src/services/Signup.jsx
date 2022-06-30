import React from 'react';
import { Formik} from 'formik';
// import { TextField } from './TextField';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import '../css/Signup.css';

export const Register = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .min(3, 'Must be 15 characters or less')
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required')
  });

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values);
      }}
    >
    </Formik>
  );
};


function Signup() {
	return (
	<section className="login-block">
		<div className="container">
		<div className="row">
			<div className="col-md-4 login-sec">
				<h2 className="text-center">Register Now</h2>
				<form className="login-form">

	  <div className="form-group">
		<label htmlFor="exampleInputName1" className="text-uppercase">Name</label>
		<input type="text" className="form-control" placeholder="" />
	  </div>
	  <div className="form-group">
		<label htmlFor="exampleInputLastName1" className="text-uppercase">Last Name</label>
		<input type="text" className="form-control" placeholder="" />
	  </div>
	  <div className="form-group">
		<label htmlFor="exampleInputUsername1" className="text-uppercase">Username</label>
		<input type="text" className="form-control" placeholder="" />
	  </div>
	  <div className="form-group">
		<label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>
		<input type="text" className="form-control" placeholder="" />
	  </div>
	  <div className="form-group">
		<label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
		<input type="password" className="form-control" placeholder="" />
	  </div>
	  <div className="form-group">
		<label htmlFor="exampleInputPassword1" className="text-uppercase">Confirm Password</label>
		<input type="password" className="form-control" placeholder="" />
	  </div>

		<div className="form-check">
		<button type="submit" className="btn btn-login float-right">Submit</button>
        </div>
			<div className="d-flex justify-content-center links2">Already have an account?&nbsp;
				<Link to='/' href="#">Login</Link>
	  		</div>
	</form>
			</div>
			<div className="col-md-8 banner-sec">
				<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
					 <ol className="carousel-indicators">
						<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
					  </ol>
				<div className="carousel-inner" role="listbox">
		<div className="carousel-item active">
		  <img className="d-block img-fluid" src="https://www.encora.com/hs-fs/hubfs/Press%20release.png?width=1253&name=Press%20release.png" alt="First slide" />
		  <div className="carousel-caption d-none d-md-block">
			<div className="banner-text">
				<h2>This is Heaven</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
			</div>
	  </div>
		</div>
		<div className="carousel-item">
		  <img className="d-block img-fluid" src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg" alt="First slide" />
		  <div className="carousel-caption d-none d-md-block">
			<div className="banner-text">
				<h2>This is Heaven</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
			</div>
		  </div>
		</div>
		<div className="carousel-item">
		  <img className="d-block img-fluid" src="https://i.postimg.cc/wj2qWcz2/encora.jpg" alt="First slide" />
		  <div className="carousel-caption d-none d-md-block">
			<div className="banner-text">
				<h2>This is Heaven</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
			</div>
		  </div>
		</div>
				</div>
				</div>
			</div>
		</div>
		</div>
	</section>
	);
}

export default Signup;
