import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/session';
import { useHistory } from 'react-router-dom';
import './DemoUser.css'


export default function DemoUser(){
    const dispatch = useDispatch();
    const history = useHistory()
    const demoLogin = async (e) => {
        e.preventDefault();
        await dispatch(login('demo@yome.io', 'password'));
        history.push('/invoices')
        return
	};

    return(
        <button className='demo-button' onClick={(e) => demoLogin(e)}>Try It Free/Demo</button>
    )
}