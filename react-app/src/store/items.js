const SET_ITEM = 'items/SET_ITEM';
const REMOVE_ITEM = 'items/REMOVE_ITEM';

//Action Creators
const setItem = (item)=>({
    type:SET_ITEM,
    item:item
});

const removeItem =(item)=>({
    type:REMOVE_ITEM,
    item
})

//////////////Thunks/////
//Create
// items get created in invoice creation thunk
// export const itemCreation = (description,rate,quantity, amount) => async (dispatch) =>{
//     const res = await fetch('/api/invoices/new-invoice/item',{
//         method:'POST',
//         headers:{'Content-Type': 'application/json'},
//         body:JSON.stringify({
//             description, rate, quantity, amount
//         })
//     })
//     if (res.ok){
//         const newItem = await res.json()
//         dispatch(setItem(newItem))
//         return null;
//     }else if (res.status < 500){
//         const data = await res.json()
//         if (data.errors){
//             return data.errors;
//         }
//     }else{
//         return ['An error occured. Please try again.']
//     }
// }

//Update
export const editItem = (id, description,rate,quantity,amount)=> async(dispatch)=>{
    const res = await fetch(`/api/items/${id}/edit`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({id,description,rate,quantity,amount})
    });
    if(res.ok){
        const updatedItem = await res.json();
        dispatch(setItem(updatedItem));
        return updatedItem;
    }
}
//Delete
export const deleteItem = (id) => async (dispatch) =>{
    const res =await fetch (`/api/items/${id}`,{
        method:'DELETE',
        body:JSON.stringify({id}),
    })
    if(res.ok){
        await res.json()
        dispatch(removeItem(id));
        return res;
    }
}

//Reducer//
const initialState={}
const itemReducer = (state = initialState, action)=>{
    let newState = {}
    switch(action.type){
        case SET_ITEM:
            return {item:action.item}
        case REMOVE_ITEM:
            newState ={...state}
            delete newState[action.id];
            return {...newState}
        default:
            return state;
    }
}

export default itemReducer;