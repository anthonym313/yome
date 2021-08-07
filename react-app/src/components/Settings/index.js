import React, { useState, useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';

import { editUser } from '../../store/session';
import './Settings.css'

export default function Settings() {
  const user = useSelector((state)=>(state.session.user))
  const dispatch= useDispatch()
  const [id,setId]= useState(user.id)
  const [username,updateUserName]=useState(user.username)
  const [streetaddress,updateStreetAddress]=useState(user.street_address)
  const [citystate,updateCityState]=useState(user.city_state)
  const [zipcode,updateZipcode]=useState(user.zipcode)
  const [phone,updatePhone]=useState(user.phone)
  const [businessphone,updateBusinessPhone]=useState(user.business_phone)
  const [logourl,updateLogoUrl]=useState(user.logo_url)
  const [validationErrors, setValidationErrors]=useState([])  

  useEffect(() => {
    setId(user.id)
    const errors = [];
    if(!username)errors.push('Please provide a Business Name')
    if(!logourl) errors.push('Please provide Logo Url')
    if(!phone && !businessphone) errors.push('Please provide at least one phone number')
    setValidationErrors(errors)
    
  }, [user,username, streetaddress,citystate,zipcode,phone,businessphone,logourl]);
  
  const handleSubmit =(e)=>{
    e.preventDefault();
     if(!validationErrors.length){
      dispatch(editUser(id, username, streetaddress,citystate,zipcode,phone,businessphone,logourl))
      window.alert('Business Profile Settings Updated!')
    }
    
  }

  
  return user && (
    <div className="settings-page-container">
      <div className='settings-card-container'>
        <h1>Profile Settings</h1>
        <div className='settings-update-errors'>
            {validationErrors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
        </div>
        <div className="editable-user-settings">
          
            <h3>Edit Business Profile</h3>
            <button type='submit' onClick={handleSubmit}>Save</button>
          
          <form>
            <div className='user-logo-edits'>
              <img src={user.logo_url} alt='business logo' style={{height:'150px'}}></img>
              <div className='user-edit'>
                <label>LogoUrl</label>
                <input
                type="text"
                name="logo_url"
                placeholder={logourl}
                onChange={(e)=>updateLogoUrl(e.target.value)}
                value={logourl}
                required={true}
                ></input>
              </div>  
            </div>
            <div className='user-edit'>
              <label>Business/ Company Name</label>
                <input
                type="text"
                name="username"
                placeholder={user.username}
                onChange={(e)=>updateUserName(e.target.value)}
                value={username}
                required={true}
                ></input>
              </div>
              <div className='user-edit'>
                <label>Street Address</label>
                <input
                type="text"
                name="street_address"
                placeholder={streetaddress}
                onChange={(e)=>updateStreetAddress(e.target.value)}
                value={streetaddress}
                required={true}
                ></input>
              </div>
              <div className='user-edit'>
                <label>City,State</label>
                <input
                type="text"
                name="city_state"
                placeholder={citystate}
                onChange={(e)=>updateCityState(e.target.value)}
                value={citystate}
                required={true}
                ></input>
              </div>

              <div className='user-edit'>
                <label>Zipcode</label>
                <input
                type="text"
                name="zipcode"
                placeholder={zipcode}
                onChange={(e)=>updateZipcode(e.target.value)}
                value={zipcode}
                required={true}
                ></input>
              </div>
              <div className='user-edit'>
                <label>Business Phone Number</label>
                <input
                type="text"
                name="business_phone"
                placeholder={businessphone}
                onChange={(e)=>updateBusinessPhone(e.target.value)}
                value={businessphone}
                required={true}
                ></input>
              </div>
              <div className='user-edit'>
                <label>Other Phone Number</label>
                <input
                type="text"
                name="phone"
                placeholder={phone}
                onChange={(e)=>updatePhone(e.target.value)}
                value={phone}
                required={true}
                ></input>
              </div>
              
          </form>


        </div>

      </div>

    </div>
  );
}
              

