import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [cityState, setCityState] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [phone, setPhone] = useState('')
  const [businessPhone,setBusinessPhone ]= useState('')
  const [logoUrl, setLogoUrl] = useState('')
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password, streetAddress,cityState,
        zipcode,phone, businessPhone, logoUrl
        ));
      if (data) {
        setErrors(data)
      }
    }
    if(password !== repeatPassword){
      setErrors(['Passwords do not match'])
    }
    
  };
  
  const updateStreetAddress = (e) => {
    setStreetAddress(e.target.value);
  };
  const updateCityState = (e) => {
    setCityState(e.target.value);
  };
  const updateZipCode = (e) => {
    setZipcode(e.target.value);
  };
  const updatePhone = (e) => {
    setPhone(e.target.value);
  };
  const updateBusinsessPhone = (e) => {
    setBusinessPhone(e.target.value);
  };
  const updateLogoUrl = (e) => {
    setLogoUrl(e.target.value);
  };
  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };
  
  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/invoices' />;
  }

  return (
    <div className='signup-page-container'>
      <div className='signup-column-left'>
        <form onSubmit={onSignUp}>
          <div className='signup-errors'>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div>
            <label>Business or Individual Name*(required)</label>
            <input
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div>
            <label>Email*(required)</label>
            <input
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div>
            <label>Street Address</label>
            <input
              type='text'
              name='street_address'
              onChange={updateStreetAddress}
              value={streetAddress}
            ></input>
          </div>
          <div>
            <label>City, State</label>
            <input
              type='text'
              name='city_state'
              onChange={updateCityState}
              value={cityState}
            ></input>
          </div>
          <div>
            <label>Zipcode</label>
            <input
              type='text'
              name='zipcode'
              onChange={updateZipCode}
              value={zipcode}
            ></input>
          </div>
          <div>
            <label>Phone Number</label>
            <input
              type='text'
              name='phone'
              onChange={updatePhone}
              value={phone}
            ></input>
          </div>
          <div>
            <label>Business Phone Number</label>
            <input
              type='text'
              name='business_phone'
              onChange={updateBusinsessPhone}
              value={businessPhone}
            ></input>
          </div>
          <div>
            <label>Logo Url</label>
            <input
              type='text'
              name='logo_url'
              onChange={updateLogoUrl}
              value={logoUrl}
            ></input>
          </div>
          <div>
            <label>Password*(required)</label>
            <input
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div>
            <label>Repeat Password*(required)</label>
            <input
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <button className='signup-button' type='submit'>Sign Up!</button>
        </form>
      </div>
      <div className='signup-column-right'>
        <h1>Sign Up!</h1>
        <h2>Get started creating invoices for your business with ease.</h2>
        <img src='https://github.com/anthonym313/yome/blob/main/react-app/public/images/sign-up-illustration-yome.png?raw=true' alt='key and chart'></img>
        <h3>Already have an Account?</h3>
        <a href='/login'><h4>Login</h4></a>
      </div>
    </div>
  );
};

export default SignUpForm;
