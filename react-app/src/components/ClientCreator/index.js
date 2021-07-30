import React,{useState} from "react";
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { clientCreation } from "../../store/clients";

import './ClientCreator.css'

export default function ClientCreator(){
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [streetaddress, setStreetAddress] = useState('');
    const [phone, setPhone] = useState('')
    
    const dispatch = useDispatch();
    const history = useHistory();

    const submitHandler = async(e)=>{
        e.preventDefault();
        const data = await dispatch(clientCreation(name, email, streetaddress, phone));
        if (data){
            setErrors(data)
        }
        window.alert('Client Created!')
        history.push('/clients')
    }

    return(
        <div className='client-creationPage-container'>
            <h1>Create a New Client</h1>
            <form onSubmit={submitHandler}>
                <div className='clientCreator-errors'>
                    {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                    ))}
                </div>
                <div>
                    <label>Name*(required)</label>
                    <input
                    type='text'
                    name='name'
                    onChange={(e)=>setName(e.target.value)}
                    value={name}
                    required={true}
                    ></input>
                </div>
                <div>
                    <label>E-Mail*(required)</label>
                    <input
                    type='text'
                    name='email'
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    required={true}
                    ></input>
                </div>
                <div>
                    <label>Street Address*(required)</label>
                    <input
                    type='text'
                    name='streetaddress'
                    onChange={(e)=>setStreetAddress(e.target.value)}
                    value={streetaddress}
                    required={true}
                    ></input>
                </div>
                <div>
                    <label>Phone*(required)</label>
                    <input
                    type='text'
                    name='phone'
                    onChange={(e)=>setPhone(e.target.value)}
                    value={phone}
                    required={true}
                    ></input>
                </div>
                <div className='creation-buttons'>
                    <button id='client-creation-submit' type='submit'>Create Client</button>
                </div>
            </form>
            <a href='/clients'><button id='client-creation-cancel'>Cancel</button></a>
        </div>
    )
}

