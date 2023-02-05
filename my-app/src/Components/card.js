import React from "react";
import { Link } from "react-router-dom";
import { Show } from "../Pages/show";
export const Card =( {listOfTodos})=>{
    return (
        <>
            {Array.from(listOfTodos).map(todo => {
                return(
                    <ul key={todo.id}>
                        <li>
                
                            <Link to={`${todo.id}`}>{todo.content}</Link>
                        </li>
                    </ul>
                )
            })}

        </>
    )
}