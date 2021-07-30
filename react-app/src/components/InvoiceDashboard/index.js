import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getAllInvoices } from '../../store/invoices';

import './InvoiceDashboard.css';

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

    if(allInvoices[0]){
        return(
            <div className='invoice-dashboard-container'>
                <h1>Invoice Dashboard</h1>
                <div className='invoice-navigation'>
                    <a href='/new-invoice'><button id='new-invoice-button'>Create New Invoice</button></a>
                </div>
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
    }else{
        return(
            <div className='invoice-dashboard-container'>
                <h1>Invoice Dashboard</h1>
                <div className='invoice-navigation'>
                    <a href='/new-invoice'><button id='new-invoice-button'>Create New Invoice</button></a>
                </div>
                <h2>Currently You Have No Invoices. Create Your First Invoice!</h2>

            </div>
        )
    }

}