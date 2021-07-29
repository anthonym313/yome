const GET_INVOICES = 'invoices/GET_INVOICES';

const getInvoices = (invoiceList)=>({
    type: GET_INVOICES,
    invoiceList
});

export const getAllInvoices = () => async (dispatch) =>{
    const res = await fetch('/api/invoices');
    if(res.ok){
        const allInvoices = await res.json();
        dispatch(getInvoices(allInvoices));
    }
};

const initialState = {}
const invoiceReducer = (state = initialState, action)=>{
    let newState = {}
    switch(action.type){
        case GET_INVOICES:
            [action.invoiceList].forEach((invoice)=>{
                newState[invoice.id] = invoice
            });
            return {
                ...newState
            }
        default:
            return state;
    }
}


export default invoiceReducer;