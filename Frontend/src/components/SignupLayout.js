import React from 'react';
import { Signup } from './Signup';

const imgUrl = 'https://i.postimg.cc/wj2qWcz2/encora.jpg';

function SignupLayout () {
  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-5'>
          <Signup />
        </div>
        <div className='col-md-7 my-auto'>
          <img className='img-fluid w-100' src={imgUrl} alt='encora' />
        </div>
      </div>
    </div>
  );
}

export default SignupLayout;
