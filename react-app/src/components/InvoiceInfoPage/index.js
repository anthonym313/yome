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
    const headers = ['#', 'DESCRIPTION', 'RATE', 'QUANTITY', 'SUBTOTAL']
    const headTotal=(anInvoice)=> (['','','','TOTAL', `$ ${Number.parseFloat(anInvoice.balance).toFixed(2)}`])

    useEffect(()=>{
        dispatch(getOneInvoice(invoice_number))
    },[dispatch])

    const tableHeaders = (array)=>{
        return array.map((head, index)=>{
            return <th key={index}>{head}</th>
        })
    }
    const tableData=(array)=>{
        return array?.map((item,index)=>{
            const {amount, description, quantity, rate}= item
            return(
                <tr key={index}>
                    <td>{index}</td>
                    <td>{description}</td>
                    <td>{rate}</td>
                    <td>{quantity}</td>
                    <td>$ {Number.parseFloat(amount).toFixed(2)}</td>
                </tr>
            )
                
        })
    }
    const handleClick = (e)=>{
        e.preventDefault();
        setEditMode(editMode?false:true)
    }
    
    if(editMode === false){
        return currentInvoice && (
            <div className='individual-page-container'>
                <div className='preview-edit'>
                    <button disabled={true}>Preview Mode</button>
                    <button onClick={handleClick}>Edit Mode</button>
                </div>
                <div className='invoice-information-page-container'>
                    <div className='invoice-preview'>

                        <div className='inv-head'>
                            <div className='inv-head-logo'>
                                <h1>INVOICE</h1>
                                <img src={currentUser.logo_url} alt='user logo'></img>
                            </div>
                            <div>
                                <h3>Invoice No.</h3>
                                <p>{currentInvoice.invoice_number}</p>
                            </div>
                        </div>
                        <div className='client-company-infoContainer'>
                            <div className='client-information-container'>
                                <h3>Customer Info</h3>
                                <p>{currentInvoice.clients.name}</p>
                                <p>{currentInvoice.clients.street_address}</p>
                                <p>{currentInvoice.clients.phone}</p>
                                <p>{currentInvoice.clients.email}</p>
                            </div>
                            <div className='company-info-container'>
                                <h3>Company Info</h3>
                                <p>{currentUser.username}</p>
                                <p>{currentUser.street_address}</p>
                                <p>{currentUser.city_state} {currentUser.zipcode}</p>
                                <p>{currentUser.email}</p>
                                <p>{currentUser.business_phone}</p>
                                <p>{currentUser.phone}</p>
                            </div>
                        </div>
                        <div id='order-date'>
                            <h3>Order Date:</h3>
                            <p>{currentInvoice.date}</p>
                        </div>
                        <div>
                            <h2>Order Summary</h2>
                            <table id='invoice-summary'>
                                <tbody>
                                    <tr>{tableHeaders(headers)}</tr>
                                    {tableData(currentInvoice.items)}
                                    <tr>{tableHeaders(headTotal(currentInvoice))}</tr>
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else{
        return currentInvoice && (
            <div className='individual-page-container-edit'>
                <div className='preview-edit'>
                    <button onClick={handleClick}>Preview Mode</button>
                    <button disabled={true}>Edit Mode</button>
                </div>
                <div className='invoice-information-page-container'>
                    <div className='invoice-preview'>

                        <div className='inv-head'>
                            <div className='inv-head-logo'>
                                <h1>INVOICE</h1>
                                <img src={currentUser.logo_url} alt='user logo'></img>
                            </div>
                            <div>
                                <h3>Invoice No.</h3>
                                <p>{currentInvoice.invoice_number}</p>
                            </div>
                        </div>
                        <div className='client-company-infoContainer'>
                            <div className='client-information-container'>
                                <h3>Customer Info</h3>
                                <p>{currentInvoice.clients.name}</p>
                                <p>{currentInvoice.clients.street_address}</p>
                                <p>{currentInvoice.clients.phone}</p>
                                <p>{currentInvoice.clients.email}</p>
                            </div>
                            <div className='company-info-container'>
                                <h3>Company Info</h3>
                                <p>{currentUser.username}</p>
                                <p>{currentUser.street_address}</p>
                                <p>{currentUser.city_state} {currentUser.zipcode}</p>
                                <p>{currentUser.email}</p>
                                <p>{currentUser.business_phone}</p>
                                <p>{currentUser.phone}</p>
                            </div>
                        </div>
                        <div id='order-date'>
                            <h3>Order Date:</h3>
                            <p>{currentInvoice.date}</p>
                        </div>
                        <div>
                            <h2>Order Summary</h2>
                            <table id='invoice-summary'>
                                <tbody>
                                    <tr>{tableHeaders(headers)}</tr>
                                    {tableData(currentInvoice.items)}
                                    <tr>{tableHeaders(headTotal(currentInvoice))}</tr>
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}
                    
        

