import React,{ useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneClient } from '../../store/clients';
import {useParams} from 'react-router-dom';
import ClientEditForm from '../ClientEditForm';
import './ClientInfoPage.css';

export default function ClientInfoPage(){
    const {id} = useParams();
    const client = useSelector((state)=>Object.values(state.clients))
    const singleClient = client[0] || null
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getOneClient(id));
    },[dispatch, id])

    return(
        <div className="client-info-container">
            <h1>Client Information</h1>
            <div className='client-info-card'>
                <div client-card-left>
                <img src='https://i1.wp.com/pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png' alt='Client-AVATAR'></img>
                <h3>{singleClient?.name}</h3>
                <h4>{singleClient?.email}</h4>
                <h4>{singleClient?.street_address}</h4>
                <h4>{singleClient?.phone}</h4>
                </div>
                <div client-card-right>
                    <ClientEditForm client={singleClient} id={singleClient?.id}/>
                </div>

               
            </div>
        </div>

    )
}