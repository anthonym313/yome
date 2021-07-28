import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/session';
import './DemoUser2.css'

export default function DemoUser2(){
    const dispatch = useDispatch();
    const demoLogin = async (e) => {
        e.preventDefault();
        await dispatch(login('demo@yome.io', 'password'));

        return
	};

    return(
        <button className='demo-login-button' onClick={(e) => demoLogin(e)}>Demo</button>
    )
}