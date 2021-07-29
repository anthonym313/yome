import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getAllInvoices } from '../../store/invoices';

import './InvoiceDashboard.css'

export default function InvoiceDashboard(){
    const allInvoices = useSelector((state)=>Object.values(state.invoices))
    const dispatch = useDispatch();
    const headers = ["Invoice Number", 'Date', "Client Number", 'Balance']
    
    useEffect(()=>{
        dispatch(getAllInvoices())
    },[dispatch])
    
    const tableHeaders = (array)=>{
        return array.map((head, index)=>{
            return <th key={index}>{head}</th>
        })
    }
    const getTotalBalance =(array)=>{
        let totalBalance = 0
        array.forEach(invoice => {
            totalBalance += invoice.balance
        });
        return totalBalance;
    }
    const outstanding = getTotalBalance(allInvoices)
    

    const tableData = (array)=>{
        return array?.map((invoice)=>{
            const {invoice_number, date, balance, client_id, id} = invoice
            return(
                 <tr key={id}>
                     <td>{invoice_number}</td>
                     <td>{date}</td>
                     <td>{client_id}</td>
                     <td>${balance}</td>
                 </tr>
            )
        })
    }

    

    return(
        <div className='invoice-dashboard-container'>
            <div className='invoice-navigation'></div>
            <div className='invoices-table'>
                <table id='user-invoices'>
                    <tbody>
                        <tr>{tableHeaders(headers)}</tr>
                        {tableData(allInvoices)}
                    </tbody>
                    <tfoot>
                        <th></th>
                        <th></th>
                        <th>Outstanding Balance</th>
                        <th>${outstanding}</th>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}