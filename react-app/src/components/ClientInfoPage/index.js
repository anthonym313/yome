import React,{ useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneClient } from '../../store/clients';
import {useParams} from 'react-router-dom';
import ClientEditForm from '../ClientEditForm';
import './ClientInfoPage.css';

export default function ClientInfoPage(){
    const {id} = useParams();
    const dispatch = useDispatch();
    const client = useSelector((state)=>Object.values(state.clients))
    const singleClient = client[0] || null

    const noShow = {display:'none'}
    const show = {display:'block'}
    
    const [toogleShow, setToggleShow] = useState(noShow)


    const editClick =(e)=>{
        e.preventDefault()
        setToggleShow(show)
        let editButton = document.getElementById('client-edit-button')
        editButton.style.display='none'
    }
    const closeEdit =(e)=>{
        e.preventDefault()
        setToggleShow(noShow)
        let editButton = document.getElementById('client-edit-button')
        editButton.style.display='block'
    }

    useEffect(()=>{
        dispatch(getOneClient(id));
    },[dispatch, id])

    return singleClient && (
        <div className="client-info-container">
            <h1>Client Information</h1>
            <div className='client-info-card'>
                <div >
                    <div id='delete-client-container'>
                        <button id='delete-client-button'>Delete Client</button>
                    </div>
                    <img src='https://i1.wp.com/pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png' alt='Client-AVATAR'></img>
                    <div>
                        <button onClick={editClick} id='client-edit-button'>Edit Client</button>
                    </div>
                    <h3>{singleClient.name}</h3>
                    <h4>{singleClient.email}</h4>
                    <h4>{singleClient.street_address}</h4>
                    <h4>{singleClient.phone}</h4>
                </div>
                <div className='client-card-edit' style={toogleShow}>
                    <button onClick={closeEdit}>Cancel Edit</button>
                    <ClientEditForm client={singleClient} id={singleClient.id}/>
                </div>

               
            </div>
        </div>

    )
}