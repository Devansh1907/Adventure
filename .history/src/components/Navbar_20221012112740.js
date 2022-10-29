import React,{useState} from 'react';
import {Link} from 'react-router-dom'


function Navbar() {
    const {click , SetClick}=useState{false};
    const handleClick=()=>SetClick(!click)
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
                dev <i className='fab fa-typo3'/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' :'fas fa-bars'}/>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar