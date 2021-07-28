
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import DemoUser from '../DemoUser';

import './NavBar.css'


export default function NavBar(){
  const user = useSelector(state => state.session.user);

  if(!user){
    
    return (
      <nav>
        <ul className= 'nav-links-container pro-status'>
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
                <DemoUser/>
              </li>
              <li>
                <NavLink to='/login' exact={true} className='nav-feature'activeClassName='active'>
                  Login\
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
    
  }else{
    return (
      <nav>
        <ul className= 'nav-links-container'>
          <div className='nav-links-left'>
            <li>
              <img src='logo.png' alt='yome'></img>
            </li>
          </div>
          <div className="nav-links-center">
            <li>
              <NavLink to='/invoices' exact={true} className='nav-feature' activeClassName='active'>
                Invoices
              </NavLink>
            </li>
            <li>
              <NavLink to='/clients' exact={true} className='nav-feature' activeClassName='active'>
                Clients
              </NavLink>
            </li>
            <li>
              <NavLink to='/users/:id' exact={true} className='nav-feature' activeClassName='active'>
                Settings
              </NavLink>
            </li>
          </div>
          <div className='nav-links-right'>
            <li className='logged_in_user'>
              {user.username}
            </li>
            <div className= 'nav-links-right2'>
              <li>
                <button className='demo-button'>Upgrade Now</button>
              </li>
              <li> <LogoutButton/></li>
            </div>     
          </div>
        </ul>
      </nav>
    );
    
  }
}


