import React  from "react";
import { useEffect, useState } from "react";
import { Delete } from "../Components/Delete/delete";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
    Link
}from "react-router-dom"

export const Show = () =>{
    const [todo, settodo] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        fetch(`/api/${id}`).then(res => res.json())
        .then(data => settodo(data))
    }, [id])


    return(
        <div>
            {todo.length > 0 && todo.map(data => <div key='id'>{data.content}</div>)}
            <Delete id={id}/>
            <hr></hr>
            <Link to='/'>Back to Todo</Link>
        </div>
    )
}
