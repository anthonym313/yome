const GET_CLIENTS = 'clients/GET_CLIENTS';
const SET_CLIENT = 'clients/SET_CLIENT';
const REMOVE_CLIENT = 'clients/REMOVE_CLIENT';

//Action Creators
const getClients = (clientList)=>({
    type: GET_CLIENTS,
    clientList
});

const setClient = (client)=>({
    type:SET_CLIENT,
    client:client
})

const removeClient = (client) =>({
    type: REMOVE_CLIENT,
    client
})

///////////**Thunks**/////////
//Delete
export const deleteClient = (id) => async (dispatch) =>{
    const res = await fetch(`/api/clients/${id}`,{
        method:"DELETE",
        body:JSON.stringify({id}),
    });
    if (res.ok){
        await res.json()
        dispatch(removeClient(id));
        return res;
    }
}

//Read
export const getAllClients = () => async (dispatch) =>{
    const res = await fetch('/api/clients/');
    if(res.ok){
        const allClients = await res.json();
        dispatch(getClients(allClients));
    }
};

//Update
export const editClient = (id, name,email, streetaddress,phone) => async (dispatch)=>{
    const res = await fetch(`/api/clients/${id}/edit`, {
        method:"PUT",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({id,name,email,streetaddress,phone})
    });
    if (res.ok){
        const updatedClient= await res.json();
        dispatch(setClient(updatedClient));
        return updatedClient
    }
}

//Read
export const getOneClient =(clientId) => async (dispatch) =>{
    const res = await fetch(`/api/clients/${clientId}`);
    if (res.ok){
        const client = await res.json()
        dispatch(getClients(client));
        return client;
    }
}

//Create
export const clientCreation = (name, email,streetaddress,phone)=> async (dispatch)=>{
    const res = await fetch('/api/clients/new-client', {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify({
            name,
            email,
            streetaddress,
            phone
        })
    });

    if (res.ok){
        const data = await res.json();
        dispatch(setClient(data))
        return null;
    } else if (res.status < 500) {
        const data = await res.json();
        if (data.errors) {
          return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}



//Reducer
const initialState = {}
const clientReducer = (state = initialState, action)=>{
    let newState = {}
    switch(action.type){
        case GET_CLIENTS:
            action.clientList.forEach((client)=>{
                newState[client.id] = client
            });
            return newState;
        case SET_CLIENT:
            return {client: action.client}
        case REMOVE_CLIENT:
            newState ={ ...state}
            delete newState[action.id];
            return {...newState}
        default:
            return state;
    }
}


export default clientReducer;