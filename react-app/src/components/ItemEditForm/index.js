import React,{useEffect,useState} from 'react';


import './ItemEditForm.css'

export default function ItemEditForm({item,index,itemToInvoiceAmount, list, setList}){
    
    const {id} = item
    const [description, setDescription] = useState('')
    const [rate, setRate] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [amount, setAmount] = useState(0)
    
    
    
    function amt(r,q){
        return r * q;
    }
   
    function handleSubmit(e){
        e.preventDefault()
        itemToInvoiceAmount(amount)
        setList([...list,{id,description,rate, quantity,amount}])

    }

    useEffect(()=>{
        setAmount(amt(rate,quantity))
       
        

    },[index,id,rate, quantity])
    
            
    return item &&(
        
        <>    
            
            
                <tr key={index}>
                        <td>
                            
                                {index}


                        </td>
                        <td>
                            <div className='edit-item-description'>
                                <input
                                type='text'
                                name='description'
                                
                                placeholder={item.description}
                                value={description}
                                onChange={(e)=>setDescription(e.target.value)}
                                required
                                ></input>
                            </div>
                        </td>
                        <td>
                            <div className='edit-item-rate'>
                                <input
                                type='number'
                                name='rate'
                                placeholder={item.rate}
                                value={rate}
                                onChange={(e)=>setRate(e.target.value)}
                                required
                                ></input>
                            </div>
                        </td>
                        
                        <td>
                            <div className='edit-item-quantity'>
                                <input
                                type='number'
                                name='quantity'
                                placeholder={item.quantity}
                                value={quantity}
                                onChange={(e)=>setQuantity(e.target.value)}
                                required
                                ></input>
                            </div>
                        </td>
                        
                        <td>
                            <div className='item-balance'>
                            ${Number.parseFloat(amt(rate,quantity)).toFixed(2)}
                            </div>
                        </td>
                        <button type="sumbit" onClick={handleSubmit}>Save</button>
                </tr>
            
             
        </>
    
    )
        
    


    
}