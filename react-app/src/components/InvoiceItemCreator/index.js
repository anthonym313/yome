import React,{useState, useEffect} from 'react';
import './InvoiceItemCreator.css'

export default function InvoiceItemCreator(){
    const [description, setDescription] = useState('')
    const [rate, setRate] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [amount, setAmount] = useState(0)

    function amt(r,q){
        return r * q;
    }

    useEffect(()=>{
        setAmount(amt(rate,quantity))
         

    },[rate, quantity])

    
    return(
        <div>
            <form>

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
                           {Number.parseFloat(amount).toFixed(2)}
                        </div>
                    </td>

                </tr>

            </form>

        </div>
    )
}