import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import {GoogleLogin} from 'react-google-login'
import DemoUser2 from '../DemoUser/DemoUser2';
import './Login.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const responseGoogle = async (response) => {
    const data = await dispatch(login({email: response?.Rs?.Ct, password: 'password1!'}));
    if (user) {
    

    }


    return response
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/invoices' />;
  }

  return (
    <div className='login-page-container'>
      <div className='login-column-left'>
        <h1>Welcome Back!</h1>
        <h2>Login to continue to your account.</h2>
        <img src='https://github.com/anthonym313/yome/blob/main/react-app/public/images/clipboard.jpg?raw=true' alt='clipboard'></img>
      </div>
      <div className='login-column-right'>
        <h1>Login to Yome</h1>
        <form onSubmit={onLogin}>
          <div className='login-errors'>
    
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div className='login-input'>
            <span><i className='fas fa-at'></i> Email</span>
            <input
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
              required={true}
            />
          </div>
          <div className='login-input'>
            <span><i className='fas fa-key'></i> Password</span>
            <input
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
              required={true}
            />
          </div>
          <div id="login-button">
            <button type='submit'>Login</button>
          </div>
          <div>
            <DemoUser2/>
          </div>
        </form>
        <h3>or</h3>
        <h3>Don't have an Account?</h3>
        <a href='/sign-up'>Sign Up!</a>

      </div>
    </div>
  );
};

export default LoginForm;
