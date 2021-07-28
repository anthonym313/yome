
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
            <NavLink to='/feature' exact={true} activeClassName='active'>
              Feature
            </NavLink>
          </li>
          <div className= 'nav-links-right2'>
            <li>
              <NavLink to='/login' exact={true} activeClassName='active'>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to='/sign-up' exact={true} activeClassName='active'>
                Sign Up
              </NavLink>
            </li>
          </div>
          <li>
            <LogoutButton />
          </li>
        </div>
      </ul>
    </nav>
  );
}


