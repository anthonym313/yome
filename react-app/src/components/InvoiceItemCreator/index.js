import React,{useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { itemCreation } from '../../store/items';
import './InvoiceItemCreator.css'

export default function InvoiceItemCreator({itemToInvoiceAmount}){
    const dispatch = useDispatch()
    const [description, setDescription] = useState('')
    const [rate, setRate] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [amount, setAmount] = useState(0)

    function amt(r,q){
        return r * q;
    }

    const handleItemSubmit= (e)=>async(des,rat,qua,amt)=>{
        e.preventDefault()
        const data = await dispatch(itemCreation(des,rat,qua,amt))
        console.log(des,'items submitted too')
        return data
        
    }
    
    useEffect(()=>{
        setAmount(amt(rate,quantity))
         itemToInvoiceAmount(amount)

    },[itemToInvoiceAmount,rate, quantity,amount])

    
    return(
        <div>
            <form onSubmit={handleItemSubmit(description, rate, quantity,amount)} id="invoiceItem-form">

                <tr>
                    <td>
                        <div>
                            <input
                            type='text'
                            name='description'
                            placeholder='Description'
                            onChange={(e)=>setDescription(e.target.value)}
                            value={description}
                            ></input>
                        </div>
                    </td>
                    <td>
                        <div>
                            <input
                            type='number'
                            name='rate'
                            placeholder='Rate'
                            onChange={(e)=>setRate(e.target.value)}
                            value={rate}
                            ></input>
                        </div>
                    </td>
                    X
                    <td>
                        <div>
                            <input
                            type='number'
                            name='quantity'
                            placeholder='Quantity'
                            onChange={(e)=>setQuantity(e.target.value)}
                            value={quantity}
                            ></input>
                        </div>
                    </td>
                    =
                    <td>
                        <div>
                           ${Number.parseFloat(amount).toFixed(2)}
                        </div>
                    </td>

                </tr>

            </form>

        </div>
    )
}