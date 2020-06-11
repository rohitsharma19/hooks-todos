import { v4 as uuidv4 } from 'uuid';

export default function reducer(state, action){
    switch(action.type){
        case 'GET_TODOS':
            return {
                ...state,
                todos: action.payload
            }
        case 'TOGGLE_TODO': 
            //console.log(state.todos)
            const toggledTodos = 
                state.todos.map(t => {
                    if(t.id===action.payload.id){
                        return {...action.payload, 
                            complete:!action.payload.complete
                        }
                    }else{
                        return t
                    }
                })
            //console.log(toggledTodos)
            return {...state, toggledTodos}
        case 'REMOVE_TODO':
            const filteredTodos = state.todos.filter( t => t.id !== action.payload.id)
            const isRemovedTodo = state.currentTodo.id === action.payload.id ? {} : state.currentTodo
            return{
                ...state,
                currentTodo: isRemovedTodo,
                todos: filteredTodos
            }
        case 'ADD_TODO':
            if(!action.payload){
                return state;
            }            
            if(state.todos.findIndex( t => t.text === action.payload ) > -1){
                return state;    
            }

            const newTodo = {
                id: uuidv4(),
                text: action.payload,
                complete: false
            }    

            const addedTodos = [...state.todos, newTodo]
            return {
                ...state,
                todos: addedTodos
            }
        case 'UPDATE_TODO':
            if(!action.payload){
                return state;
            }            
            if(state.todos.findIndex( t => t.text === action.payload ) > -1){
                return state;    
            }

            const updatedTodo = {...state.currentTodo, text: action.payload }
            const updatedTodoIndex = state.todos.findIndex(
                t => t.id === state.currentTodo.id
            )
            const updatedTodos = [
                ...state.todos.slice(0,updatedTodoIndex),
                updatedTodo,
                ...state.todos.slice(updatedTodoIndex + 1)
            ]
            return {
                ...state,
                currentTodo: {},
                todos: updatedTodos
            }
        case 'SET_CURRENT_TODO': 
            return {
                ...state,
                currentTodo: action.payload
            }
        default: 
            return state
    }
}