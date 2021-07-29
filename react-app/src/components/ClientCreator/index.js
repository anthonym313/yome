import React,{useState} from "react";
import {useDispatch} from 'react-redux'
import { clientCreation } from "../../store/clients";

import './ClientCreator.css'

export default function ClientCreator(){
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [streetaddress, setStreetAddress] = useState('');
    const [phone, setPhone] = useState('')
    
    const dispatch = useDispatch();

    const submitHandler = async(e)=>{
        e.preventDefault();
        const data = await dispatch(clientCreation(name, email, streetaddress, phone));
        if (data){
            setErrors(data)
        }
    }

    return(
        <div className='client-creationPage-container'>
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
                    ></input>
                </div>
                <div>
                    <label>E-Mail*(required)</label>
                    <input
                    type='text'
                    name='email'
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    ></input>
                </div>
                <div>
                    <label>Street Address*(required)</label>
                    <input
                    type='text'
                    name='street_address'
                    onChange={(e)=>setStreetAddress(e.target.value)}
                    value={streetaddress}
                    ></input>
                </div>
                <div>
                    <label>Phone*(required)</label>
                    <input
                    type='text'
                    name='phone'
                    onChange={(e)=>setPhone(e.target.value)}
                    value={phone}
                    ></input>
                </div>

            </form>

        </div>
    )
}