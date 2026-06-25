import React from 'react';
import './nav.css';



const Nav = () => {







  return (
    
  <div>
    <div className="container">
    <div className='nav-container'>
      <div className='nav-business-name'><img className='nav-logo' src={require('../../images/seans-logo.png')} alt='logo'/></div>
        <div className='nav-number'>
            <a href="tel:469-927-3317">469-927-3317</a>
        </div>
      </div>
    </div>
  </div>
    
  )
}

export default Nav