import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getAllInvoices } from '../../store/invoices';

import './InvoiceDashboard.css'

export default function InvoiceDashboard(){
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllInvoices())
    },[dispatch])
    return(
        <div className='invoice-dashboard-container'>
            <div></div>
            <div><h1>My invoice dashboard</h1></div>
        </div>
    )
}