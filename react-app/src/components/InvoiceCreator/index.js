import React,{useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import InvoiceItemCreator from '../InvoiceItemCreator';
import { invoiceCreation } from '../../store/invoices';

import './InvoiceCreator.css';

export default function InvoiceCreator(){
    const currentUser = useSelector((state)=> state.session.user);
    
    const dispatch = useDispatch();
    const history = useHistory();
    
    const [errors, setErrors] = useState([]);
    const [invoicenumber, setInvoiceNumber] = useState('');
    const [date, setDate] = useState('')
    const [balance, setBalance] = useState(0);
    const [client, setClient] = useState('')
    

    const submitInvoiceHandler= async(e)=>{
        e.preventDefault();
        const data = await dispatch(invoiceCreation(invoicenumber,date,balance,client))
        if(data){
            setErrors(data)
        }
        window.alert('Invoice Created!')
        history.push(`/invoice/${invoicenumber}`)
    }

    return(
        <div className='invoice-creator-container'>
            <div className='invoice-header'>
                <img src={currentUser.logo_url} alt='user logo'></img>
                <h1>Invoice</h1>
            </div>
            <form onSubmit={submitInvoiceHandler}>
                <div className='invoiceCreator-errors'>
                     {errors.map((error,ind)=>(
                         <div key={ind}>{error}</div>
                     ))}
                </div>
                <div>
                    <input 
                    type='text'
                    name='invoicenumber'
                    placeholder='Invoice Number/ID'
                    onChange={(e)=>setInvoiceNumber(e.target.value)}
                    value={invoicenumber}
                    required={true}
                    ></input>
                </div>
                <div>
                    <input
                    type='date'
                    onChange={(e)=> setDate(e.target.value)}
                    value={date}
                    required={true}
                    ></input>
                </div>
                <div className='invoice-client-Info-container'>

                </div>
                <div className='invoice-business-Info-container'>
                    <h4>{currentUser.username}</h4>
                    <h5>{currentUser.street_address}</h5>
                    <h5>{currentUser.city_state} {currentUser.zipcode}</h5>
                    <h5>{currentUser.business_phone}</h5>
                    <h5>{currentUser.phone}</h5>
                </div>
                <div>
                    <thead>
                        <th>Description</th>
                        <th>Rate</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                    </thead>
                    <InvoiceItemCreator/>
                    
                </div>
                    

            </form>




        </div>
    )
}