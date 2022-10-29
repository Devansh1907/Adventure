import React,{useState} from 'react';
import {Link} from 'react-router-dom'


function Navbar() {
    const {change , setChange} = useState(false);

    const handleClick = () => {
        setChange(!change);
    }
    
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
                DevTRVL <i className='fab fa-typo3'/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={change ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar