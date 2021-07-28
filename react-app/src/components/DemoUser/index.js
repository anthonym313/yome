import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/session';
import './DemoUser.css'

export default function DemoUser(){
    const dispatch = useDispatch();
    const demoLogin = async (e) => {
        e.preventDefault();
        await dispatch(login('demo@yome.io', 'password'));

        return
	};

    return(
        <button className='demo-button' onClick={(e) => demoLogin(e)}>Try It Free/Demo</button>
    )
}