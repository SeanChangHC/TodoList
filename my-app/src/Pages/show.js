import React  from "react";
import { useEffect, useState } from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams
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
            {todo.length > 0 && todo.map(data => <div>{data.content}</div>)}
        </div>
    )
}
