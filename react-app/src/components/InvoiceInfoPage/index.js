import React,{useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import { getOneInvoice } from '../../store/invoices';
import { getOneClient } from '../../store/clients';
import './InvoiceInfoPage.css'


export default function InvoiceInfoPage(){
    const {invoice_number} = useParams();
    const dispatch = useDispatch();
    const currentUser = useSelector((state)=>(state.session.user))
    const [customerId, setCustomerId] = useState(2)

    useEffect(()=>{
        dispatch(getOneInvoice(invoice_number))
        setCustomerId(currentUser.client_id)
    },[dispatch])
    useEffect(()=>{
        dispatch(getOneClient(currentUser.client_id))
    },[dispatch,customerId])

    return(
        <div className='invoice-information-page-container'>
            <div className='invoice-snapshot'>
                <h1>Info page invoice</h1>
            </div>
            <div></div>

        </div>
    )

}