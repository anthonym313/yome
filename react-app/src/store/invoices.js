const GET_INVOICES = 'invoices/GET_INVOICES';
const SET_INVOICE = 'invoices/SET_INVOICE';
const REMOVE_INVOICE = 'invoices/REMOVE_INVOICE';

//Action Creators
const getInvoices = (invoiceList)=>({
    type: GET_INVOICES,
    invoiceList
});
const setInvoice = (invoice)=>({
    type:SET_INVOICE,
    invoice:invoice
})
const removeInvoice =(invoice)=>({
    type:REMOVE_INVOICE,
    invoice

})

///////////////Thunks
//Create
export const invoiceCreation = (invoicenumber, date, balance,clientid, arrayOfItems) => async (dispatch)=>{
    const res = await fetch('/api/invoices/new-invoice',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            invoicenumber,date,balance, clientid,arrayOfItems
        })
    });
    if (res.ok){
        const invoice = await res.json();
        dispatch(setInvoice(invoice))
        return null;
    }else if (res.status < 500){
        const data = await res.json()
        if (data.errors){
            return data.errors;
        }
    }else{
        return ['An error occured. Please try again.']
    }
}

//Read
export const getAllInvoices = () => async (dispatch) =>{
    const res = await fetch('/api/invoices/');
    if(res.ok){
        const allInvoices = await res.json();
        dispatch(getInvoices(allInvoices));
    }
};
//Read
export const getOneInvoice = (invoiceNumber) => async (dispatch) =>{
    const res = await fetch(`/api/invoices/${invoiceNumber}`);
    if(res.ok){
        const invoice = await res.json()
        dispatch(getInvoices(invoice));
        return invoice;
    }
}

//Update
export const editInvoice = (id,invoicenumber, date,clientid) => async (dispatch) =>{
    const res = await fetch(`/api/invoices/${id}/edit`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({id, invoicenumber,date, clientid})
    });
    if(res.ok){
        const updatedInvoice = await res.json();
        dispatch(setInvoice(updatedInvoice));
        return updatedInvoice;
    }
}

//Delete
export const deleteInvoice =(id)=> async (dispatch)=>{
    const res =await fetch(`/api/clients/${id}`, {
        method:'DELETE',
        body:JSON.stringify({id}),
    });
    if (res.ok){
        await res.json()
        dispatch(removeInvoice(id));
        return res;
    }
}

//Reducer//
const initialState = {}
const invoiceReducer = (state = initialState, action)=>{
    let newState = {}
    switch(action.type){
        case GET_INVOICES:
            action.invoiceList.forEach((invoice)=>{
                newState[invoice.id] = invoice
            });
            return newState;
        case SET_INVOICE:
            return {invoice:action.invoice}
        case REMOVE_INVOICE:
            newState = {...state}
            delete newState[action.id];
            return {...newState}
        default:
            return state;
    }
}


export default invoiceReducer;