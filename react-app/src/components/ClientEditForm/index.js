import React,{useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import './ClientEditForm.css'
import { editClient} from '../../store/clients';


export default function ClientEditForm({client, id}){
    const dispatch = useDispatch();
    const history = useHistory();
    
    const [name, updateName]= useState(client.name)
    const [email, updateEmail]= useState(client.email)
    const [streetaddress, updateStreetAddress] = useState(client.street_address)
    const [phone, updatePhone] = useState(client.phone) 
   
    useEffect(()=>{
       
    },[client,name,email,streetaddress,phone, dispatch])
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(editClient(id,name,email,streetaddress,phone))
        window.alert('Client Information Updated!!')
        history.push('/clients')
    }
    
    
    return client && (
        <form onSubmit={handleSubmit}>
             <div>
                    <label>Update Name</label>
                    <input
                    type='text'
                    name='name'
                    placeholder={client.name}
                    onChange={(e)=>updateName(e.target.value)}
                    value={name}
                    required={true}
                
                    ></input>
                </div>
                <div>
                    <label>Update E-Mail</label>
                    <input
                    type='text'
                    name='email'
                    placeholder={client?.email}
                    onChange={(e)=>updateEmail(e.target.value)}
                    value={email}
                    required={true}
                    ></input>
                </div>
                <div>
                    <label>Update Street Address</label>
                    <input
                    type='text'
                    name='streetaddress'
                    placeholder={client?.street_address}
                    onChange={(e)=>updateStreetAddress(e.target.value)}
                    value={streetaddress}
                    required={true}
                    ></input>
                </div>
                <div>
                    <label>Edit Phone Number</label>
                    <input
                    type='text'
                    placeholder={client?.phone}
                    name='phone'
                    onChange={(e)=>updatePhone(e.target.value)}
                    value={phone}
                    required={true}
                    ></input>
                </div>
                <div className='client-submitEdit-button'>
                    <button type='submit'>Submit</button>
                </div>
        </form>

    )
}