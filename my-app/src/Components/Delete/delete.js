import React from "react";
import { useNavigate } from "react-router-dom";


export const Delete = ({id}) => {
    const navagate = useNavigate()

    const deleteTodo = () =>{
        fetch(`api/${id}`,{
            method:'POST',
            body:JSON.stringify({
                id:id
            })
        }).then(res => res.json())
        .then(data => { 
            console.log(data)
            navagate('/')
        })

    }


    return(
        <>
            <button onClick={deleteTodo}>Delete</button>
        </>

    )

}