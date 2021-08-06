import React,{useEffect,useState} from 'react';
import { useDispatch } from 'react-redux';
import { editItem,deleteItem } from '../../store/items';

import './ItemEditForm.css'

export default function ItemEditForm(item){
    console.log('this is an item',item)
    const {id} = item
    const dispatch = useDispatch()
    const [description, setDescription] = useState(item?.description)
    const [rate, setRate] = useState(item?.rate);
    const [quantity, setQuantity] = useState(item?.quantity);
    const [amount, setAmount] = useState(item?.amount)
    const [itemId, setId] = useState(item?.id || null)
    
    
    function amt(r,q){
        return r * q;
    }
    const saveItemHandler=async(e)=>{
        e.preventDefault();
        await dispatch(editItem(itemId, description, rate, quantity, amount));
        window.alert('an item updated')
    }
    const deleteItemHandler=(e)=>{
        e.preventDefault();
        dispatch(deleteItem(id))
        window.alert('item deleted.')

    }


    useEffect(()=>{
        setAmount(amt(rate,quantity))
        setId(id)
    },[id,rate, quantity, amount, description])
    
    
            
            return item &&(
                <tr key={description}>
                    <td>
                        
                    </td>
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
                            placeholder={quantity}
                            onChange={(e)=>setQuantity(e.target.value)}
                            value={quantity}
                            required
                            ></input>
                        </div>
                    </td>
                    =
                    <td>
                        <div className='item-balance'>
                           ${Number.parseFloat(item?.amount).toFixed(2)}
                        </div>
                    </td>
                    <td>
                        <button onClick={saveItemHandler}>Save Updates</button>
                        <button onClick={deleteItemHandler}>Delete Item</button>
                    </td>
                </tr>
            )
                
        
    


    
}