import React, {useContext, useReducer} from 'react';
import {UserContext} from './index';

const initialState = {
  count : 0
}
function reducer(state, action){
  switch(action.type){
     case 'increment' : return {count : state.count + 1};
     case 'decrement' : return {count : state.count - 1};
     case 'reset' : return initialState;
     default : return initialState; 
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  const value = useContext(UserContext);

  return (
    <div>
      <div><h1>Count : {state.count}</h1></div>
      <button className="m-1 p-1 border rounded" onClick={() => {dispatch({type:'increment'})}}>Increment</button>
      <button className="m-1 p-1 border rounded" onClick={() => {dispatch({type:'decrement'})}}>Decrement</button>
      <button className="m-1 p-1 border rounded" onClick={() => {dispatch({type:'reset'})}}>Reset</button>
    </div>
  );
}

export default App;
