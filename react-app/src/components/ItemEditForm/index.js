import React,{useEffect,useState} from 'react';


import './ItemEditForm.css'

export default function ItemEditForm({item,index,itemToInvoiceAmount, list, setList}){
    
    
    const [description, setDescription] = useState('')
    const [rate, setRate] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [amount, setAmount] = useState(0)
    
    
    
    function amt(r,q){
        return r * q;
    }
   


    useEffect(()=>{
        setAmount(amt(rate,quantity))
        itemToInvoiceAmount(amount)
       
            setList([...list,{description,rate, quantity,amount}])
        

    },[itemToInvoiceAmount,index,rate, quantity,amount,description,list,setList])
    
            
            return (
                <tr key={description}>
                    <td>
                        {index}
                    </td>
                    <td>
                        <div className='item-description'>
                            <input
                            type='text'
                            name='description'
                            placeholder={item.description}
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
                            placeholder={item.rate}
                            onChange={(e)=>setRate(e.target.value)}
                            value={rate}
                            required
                            ></input>
                        </div>
                    </td>
                    
                    <td>
                        <div className='item-quantity'>
                            <input
                            type='number'
                            name='quantity'
                            placeholder={item.quantity}
                            onChange={(e)=>setQuantity(e.target.value)}
                            value={quantity}
                            required
                            ></input>
                        </div>
                    </td>
                    
                    <td>
                        <div className='item-balance'>
                           ${Number.parseFloat(amt(rate,quantity)).toFixed(2)}
                        </div>
                    </td>
                
                </tr>
            )
                
        
    


    
}