import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getAllClients} from '../../store/clients'
import './ClientDashboard.css';

export default function ClientDashboard(){
    const allClients = useSelector((state)=> Object.values(state.clients))
    const dispatch = useDispatch();
    const headers = ['ID',"Name", 'Phone','Address', "Email" ]

    useEffect(()=>{
        dispatch(getAllClients())
    },[dispatch])

    const tableHeaders = (array)=>{
        return array.map((head, index)=>{
            return <th key={index}>{head}</th>
        })
    }

    const tableData = (array)=>{
        return array?.map((client)=>{
            const{id, name, phone, street_address, email }= client
            return(
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{phone}</td>
                    <td>{street_address}</td>
                    <td>{email}</td>
                </tr>
            )
        })
    }
                  


    if(allClients){
        return(
            <div>
                <h1>Clients Dashboard</h1>
                <div className='clients-table'>
                    <table id="user-clients">
                        <tbody>
                            <tr>{tableHeaders(headers)}</tr>
                            {tableData(allClients)}
                        </tbody>
                    </table>

                </div>
            </div>
        )
    } else{
        return(
            <div>
                <h1>Currently You Have No Saved Clients</h1>
            </div>
        )
    }

}
