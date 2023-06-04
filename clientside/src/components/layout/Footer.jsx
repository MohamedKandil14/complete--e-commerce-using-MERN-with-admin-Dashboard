import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer bg-dark text-light p-3 '>
      <h4 className='text-center'> all rights Reserved &copy; MK14</h4>
      <p className='text-center mt-1'>
     <Link className='mx-2 fs-2 text-success' to='/contact'>contact us</Link>|
     <Link className='mx-2 fs-2 text-success ' to='/policy'>policy</Link>|
     <Link className='mx-2 fs-2 text-success ' to='/about'>About us</Link>
      </p>

    </div>
  )
}
