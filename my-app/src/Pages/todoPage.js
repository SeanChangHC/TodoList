import React, { useEffect, useState }  from 'react'

import { Card } from '../Components/card'
import { Form } from '../Form/form'


export const TodoPage = () => {
    const [todo, setTodo] = useState([])
    const [addTodo, setAddTodo] = useState('')

    useEffect(()=>{
        fetch('/api').then(response =>{
            if(response.ok){
                return response.clone().json()
            }
        }).then(data => setTodo(data))
    }, [])


    const handleFormChange = (inputValue) =>{
        setAddTodo(inputValue)
        console.log(addTodo)
    }
    
    const handleFormSubmit = () =>{
        fetch('/api/create', {
            method: 'POST',
            body: JSON.stringify({
                content: addTodo
            }),
            headers : {
                "Content-type" : "application/json; charset = UTF-8"
            }
        })
        .then(response => response.clone().json())
        .then(message => {
            console.log(message)
            setAddTodo("")
            getLatestTodos()
        })
    }

    const getLatestTodos = () =>{
        fetch('/api')
        .then(response => {
            if(response.ok){
                return response.clone().json()
            }
        })
        .then(data => {
            setTodo(data)
            // console.log(data)
        })
        
    }

    return(

        <>
            <div> TODOPAGE</div>
            <Form  userInput={addTodo} onFormChange={handleFormChange} onFormSubmit ={handleFormSubmit}/>
            <Card listOfTodos={todo} />
        </>
    )
}