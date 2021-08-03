// const SET_ITEM = 'items/SET_ITEM'

// //Action Creators
// const setItem = (item)=>({
//     type:SET_ITEM,
//     item:item
// });

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


//Reducer//
const initialState={}
const itemReducer = (state = initialState, action)=>{
    
    switch(action.type){
        // case SET_ITEM:
        //     return{item:action.item}
        default:
            return state;
    }
}

export default itemReducer;