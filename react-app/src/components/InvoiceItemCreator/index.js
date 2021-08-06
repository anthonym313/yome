import React,{useState, useEffect} from 'react';

import './InvoiceItemCreator.css'

export default function InvoiceItemCreator({itemToInvoiceAmount, list, setList}){
  
    const [description, setDescription] = useState('')
    const [rate, setRate] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [amount, setAmount] = useState(0)
    
    
    function amt(r,q){
        return r * q;
    }
    
    
    
    useEffect(()=>{
        setAmount(amt(rate,quantity))
        itemToInvoiceAmount(amount)
       
            setList([...list,{description,rate, quantity,amount}])
        

    },[itemToInvoiceAmount,rate, quantity,amount,description,list,setList])

    
    return(
        <div className='invoiceItem'>
            <form >

                <tr className='invoice-item-inputs'>
                    <td>
                        <div className='item-description'>
                            <input
                            type='text'
                            name='description'
                            placeholder='Description'
                            onChange={(e)=>setDescription(e.target.value)}
                            value={description}
                            required
                            ></input>
                        </div>
                    </td>
                    <td>
                        <div className='item-rate'>
                            <input
                            type='number'
                            name='rate'
                            placeholder='Rate'
                            onChange={(e)=>setRate(e.target.value)}
                            value={rate}
                            required
                            ></input>
                        </div>
                    </td>
                    X
                    <td>
                        <div className='item-quantity'>
                            <input
                            type='number'
                            name='quantity'
                            placeholder='Quantity'
                            onChange={(e)=>setQuantity(e.target.value)}
                            value={quantity}
                            required
                            ></input>
                        </div>
                    </td>
                    =
                    <td>
                        <div className='item-balance'>
                           ${Number.parseFloat(amount).toFixed(2)}
                        </div>
                    </td>

                </tr>

            </form>

        </div>
    )
}