import React,{ useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneClient } from '../../store/clients';
import {useParams} from 'react-router-dom';
import './ClientInfoPage.css';

export default function ClientInfoPage(){
    const {id} = useParams();
    const client = useSelector((state)=>Object.values(state.clients))
    const singleClient = client[0]
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getOneClient(id));
    },[dispatch, id])

    return(
        <div className="client-info-container">
            <h1>Client Information</h1>
            <div>
                {singleClient.id}
                
            </div>
        </div>

    )
}