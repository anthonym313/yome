import React from 'react';
import {useSelector} from 'react-redux';

import './InvoiceCreator.css';

export default function InvoiceCreator(){
    const currentUser = useSelector((state)=> state.session.user);

    return(
        <div className='invoice-creator-container'>
            <div className='invoice-header'>
                <img src={currentUser.logo_url} alt='user logo'></img>
                <h1>Invoice</h1>

            </div>


        </div>
    )
}