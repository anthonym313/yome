import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import './InvoiceInfoPage.css'


export default function InvoiceInfoPage(){
    const {invoiceNum} = useParams();
    const dispatch = useDispatch();
    const currentUser = useSelector((state)=>(state.session.user))


    return(
        <div className='invoice-information-page-container'>
            <div className='invoice-snapshot'>
                <h1>Info page invoice</h1>
            </div>
            <div></div>

        </div>
    )

}