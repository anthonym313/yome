const GET_CLIENTS = 'clients/GET_CLIENTS';

const getClients = (clientList)=>({
    type: GET_CLIENTS,
    clientList
});

export const getAllClients = () => async (dispatch) =>{
    const res = await fetch('/api/clients/');
    if(res.ok){
        const allClients = await res.json();
        dispatch(getClients(allClients));
    }
};

const initialState = {}
const clientReducer = (state = initialState, action)=>{
    let newState = {}
    switch(action.type){
        case GET_CLIENTS:
            action.clientList.forEach((client)=>{
                newState[client.id] = client
            });
            return newState;
        default:
            return state;
    }
}


export default clientReducer;