import React from 'react';

const TodosContext = React.createContext({
    todos : [
        {id:1, text:'Eat Breakfast', complete:false},
        {id:2, text:'Eat Lunch', complete:false},
        {id:3, text:'Eat Dinner', complete:true}
    ],
    currentTodo : {}
})

export default TodosContext