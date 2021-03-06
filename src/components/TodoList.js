import React,{useContext} from 'react';
import TodosContext from '../context';
import axios from 'axios';

function TodoList(){
    const {state, dispatch} = useContext(TodosContext)
    const title = state.todos.length ? `${state.todos.length} Todos`:'Nothing To Do!'
    return (
        <div className="container mx-auto mx-w-md text-center font-mono">
            <h1 className="text-bold">{title}</h1>
            <ul className="list-reset text-white p-0">
                {state.todos.map(todo => (
                    <li key={todo.id} className="flex items-center bg-orange-400 border-black border-dashed border-2 my-2 py-4">
                        <span 
                        onDoubleClick={() => dispatch({type: 'TOGGLE_TODO', payload: todo})} 
                        className={`flex-1 cursor-pointer ${todo.complete && "line-through text-blue-400"}`}>
                            {todo.text}
                        </span>
                        <button onClick={()=>dispatch({ type:"SET_CURRENT_TODO", payload: todo})}>
                            <img src="https://icon.now.sh/edit/0050c5" alt="Edit Icon" className="h-6"></img>
                        </button>
                        <button 
                            onClick={async () => {
                                await axios.delete(`https://hooks-api-plum.now.sh/todos/${todo.id}`);
                                dispatch({type:"REMOVE_TODO", payload: todo})
                            }}>
                            <img src="https://icon.now.sh/delete/8b0000 " alt="Delete Icon" className="h-6"></img>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList