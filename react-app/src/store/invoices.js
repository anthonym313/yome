const GET_INVOICES = 'invoices/GET_INVOICES';
const SET_INVOICE = 'invoices/SET_INVOICE';

//Action Creators
const getInvoices = (invoiceList)=>({
    type: GET_INVOICES,
    invoiceList
});
const setInvoice = (invoice)=>({
    type:SET_INVOICE,
    invoice:invoice
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

//Update

//Delete


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
        default:
            return state;
    }
}


export default invoiceReducer;