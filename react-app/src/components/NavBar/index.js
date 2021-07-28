
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'


export default function NavBar(){
  return (
    <nav>
      <ul className= 'nav-links-container'>
        <li className='nav-links-left'>
          <NavLink to='/' exact={true} activeClassName='active'>
            <img src='logo.png' alt='yome'></img>
          </NavLink>
        </li>
        <div className='nav-links-right'>
          <li>
            <NavLink to='/features' exact={true} className='nav-feature' activeClassName='active'>
              Features
            </NavLink>
          </li>
          <div className= 'nav-links-right2'>
            <li>
              <button className='demo-button'>Try It Free/Demo</button>
            </li>
            <li>
              <NavLink to='/login' exact={true} className='nav-feature'activeClassName='active'>
                Login /
              </NavLink>
              <NavLink to='/sign-up' exact={true} className='nav-feature'activeClassName='active'>
                Sign Up
              </NavLink>
            </li>
          </div>
            
          
        </div>
      </ul>
    </nav>
  );
}


