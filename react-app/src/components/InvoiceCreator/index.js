import React,{useState,useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

import InvoiceItemCreator from '../InvoiceItemCreator';
import { invoiceCreation } from '../../store/invoices';
import { getAllClients } from '../../store/clients';

import './InvoiceCreator.css';

export default function InvoiceCreator(){
    const allClients = useSelector((state)=> Object.values(state.clients))
    const currentUser = useSelector((state)=> state.session.user);
    
    const dispatch = useDispatch();
    const history = useHistory();
    
    const [errors, setErrors] = useState([]);
    const [items, setItems] = useState([])
    const [invoicenumber, setInvoiceNumber] = useState('');
    const [date, setDate] = useState('')
    const [balance, setBalance] = useState(0);
    const [client, setClient] = useState(1)
    
    const [itemAmounts, setItemAmounts ] = useState([0])
    const [list, setList]= useState([])
    
    const itemToInvoiceAmount = (itemAmt)=>{
        setItemAmounts([...itemAmounts,itemAmt])
    }
   
    const clientTings =(e)=>{
        setClient(e.target.value)
    }
    

    const submitInvoiceHandler= async(e)=>{
        e.preventDefault();

        const data = await dispatch(invoiceCreation(invoicenumber,date,balance,client,list))
        if(data){
            setErrors(data)
        }
        window.alert('Invoice Created!')
        history.push(`/invoices/${invoicenumber}`)
        return data;
    }
        
    const addItem =(e)=>{
        e.preventDefault();
        setItems([...items,<InvoiceItemCreator itemToInvoiceAmount ={itemToInvoiceAmount} list={list} setList={setList} />])
    } 
    
    const deleteItem=(e)=>{
        e.preventDefault();
        if(items[0]){
            items.pop()
            itemAmounts.pop()
            setItems([...items])
            setItemAmounts([...itemAmounts])
        }
        return
    }
            
    function getBalance(array){
        let n = 0
        array.forEach(item=>(n+=item))
        setBalance(n) 
    }
    
    
    useEffect(()=>{
        dispatch(getAllClients())
        getBalance(itemAmounts)
    },[dispatch,itemAmounts])
    
    
    
    return allClients &&(
        <div className='invoice-creator-container'>
            <div className='invoice-header'>
                <img src={currentUser.logo_url} alt='user logo'></img>
                <div>
                    <h1>Invoice</h1>
                </div>
            </div>

               
            <form  id='invoice-creator-form'>
                <div className='invoiceCreator-errors'>
                     {errors.map((error,ind)=>(
                         <div key={ind}>{error}</div>
                         ))}
                </div>
                <div className='invoice-top-inputs'>
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

                </div>
                <div className='busCli-container'>
                    <div className='invoice-client-Info-container'>
                        <label for='clients'> Choose a client</label>
                        <select value={client} onChange={clientTings} id='client-drop'>
                            {allClients.map((person,ind)=>(
                                <option value={person.id} key={ind}>{person.name}</option>
                                ))}
                        </select>
                    </div>
                    <div className='invoice-business-Info-container'>
                        <h4>{currentUser.username}</h4>
                        <h5>{currentUser.street_address}</h5>
                        <h5>{currentUser.city_state} {currentUser.zipcode}</h5>
                        <h5>{currentUser.business_phone}</h5>
                        <h5>{currentUser.phone}</h5>
                    </div>

                </div>
                <thead>
                    <th id='itemDes'>Description</th>
                    <th id='itemRate'>Rate</th>
                    <th id='itemQty'>Qty</th>
                    <th>Amount</th>
                </thead>
                    {items.map(item =>(
                        <div className='inv-item'>{item}</div>
                        
                    ))}
                <div className='itm-addDel-buttons'>
                    <button onClick={addItem}>Add Item</button>
                    <button onClick={deleteItem}>Delete Item</button>
                </div>
                    

            </form>
            <div className='invoice-bottom-container'>
                <thead><th>Total Balance</th></thead>
                <tbody><td>${Number.parseFloat(balance).toFixed(2)}</td></tbody>
                <button type="submit" onClick={submitInvoiceHandler}>Create Invoice</button>
            </div>    
            
        </div>
                
    )
         
              
}


                
            

    

    