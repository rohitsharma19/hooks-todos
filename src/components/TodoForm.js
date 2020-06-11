import React, {useState, useEffect, useContext} from 'react';
import TodosContext from '../context';

export default function TodoForm(){
    const [todo, setTodo] = useState("");
    const {state , dispatch } = useContext(TodosContext)

    useEffect(() => {
        if(state.currentTodo.text){
            setTodo(state.currentTodo.text)
        }else{
            setTodo("")
        }
    },[state.currentTodo.text, state.currentTodo.id])

    const handleSubmit = event => {
        event.preventDefault()

        if(state.currentTodo.text){
            dispatch({type:"UPDATE_TODO", payload: todo})
        }else{
            dispatch({type:"ADD_TODO", payload: todo})
        }

        setTodo("")
    }

    return (
        <form onSubmit={handleSubmit} className="flex justify-center p-5">
            <input 
                type="text" className="border-black border-solid border-2"
                onChange={ event => setTodo(event.target.value)} 
                value={todo}/>
        </form>
    )
}