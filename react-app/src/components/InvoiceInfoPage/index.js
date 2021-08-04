import React,{useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import { getOneInvoice } from '../../store/invoices';
import './InvoiceInfoPage.css'


export default function InvoiceInfoPage(){
    const {invoice_number} = useParams();
    const dispatch = useDispatch();
    const currentUser = useSelector((state)=>(state.session.user))
    const invoice = useSelector((state)=> Object.values(state.invoices))
    const currentInvoice = invoice[0] || null
    const [editMode, setEditMode] = useState(false)
    const headers
    useEffect(()=>{
        dispatch(getOneInvoice(invoice_number))
    },[dispatch])

    const tableHeaders = (array)=>{
        return array.map((head, index)=>{
            return <th key={index}>{head}</th>
        })
    }
    
    if(editMode === false){
        return currentInvoice && (
            <div>

                <div className='invoice-information-page-container'>
                    <div className='inv-head'>
                        <img src={currentUser.logo_url} alt='user logo'></img>
                        <div>
                            <h1>Invoice</h1>
                        </div>
                        <div>
                            <h2>{currentInvoice.invoice_number}</h2>
                        </div>
                    </div>
                    <div className='client-company-infoContainer'>
                        <div className='client-information-container'>
                            <h4>Customer Info</h4>
                            <h5>{currentInvoice.clients.name}</h5>
                            <h5>{currentInvoice.clients.street_address}</h5>
                            <h5>{currentInvoice.clients.phone}</h5>
                            <h5>{currentInvoice.clients.email}</h5>
                        </div>
                        <div className='company-info-container'>
                            <h4>Company Info</h4>
                            <h5>{currentUser.username}</h5>
                            <h5>{currentUser.street_address}</h5>
                            <h5>{currentUser.city_state}</h5>
                            <h5>{currentUser.zipcode}</h5>
                            <h5>{currentUser.business_phone}</h5>
                            <h5>{currentUser.phone}</h5>
                        </div>
                    </div>
                    <div>
                        <h2>Order Summary</h2>

                    </div>
                    
        
                </div>
            </div>
        )

    }

}