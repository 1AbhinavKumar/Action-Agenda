import {createSlice, nanoid} from "@reduxjs/toolkit"

// const initialState = {
//     todos: [],
//   };
const loadState = () => {
    const serializedState = localStorage.getItem("todos");
    return serializedState ? JSON.parse(serializedState) : { todos: [] };
};
  
const initialState = loadState();

// use selectors can directly talk to the store for the information whereas we have  to usedispatch with the help of reducer we can update the data , delete basically crud . 

export const todoSlice = createSlice({
    name:'todo',  // as there can be multiple slices so name. 
    initialState, 
    reducers: {
        addTodo: (state,action)=> {
            const todo = {  // created a new object havind id and text and then push it in the original todos . 
                id : nanoid(), 
                text: action.payload,
            }
            state.todos.push(todo)
            localStorage.setItem("todos", JSON.stringify(state));
        }, 

        removeTodo: (state,action )=> {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
            localStorage.setItem("todos", JSON.stringify(state));
        },

        updateTodo: (state, action) => {
            const { id, newText } = action.payload;
            const todoToUpdate = state.todos.find((todo) => todo.id === id);
            if (todoToUpdate) {
              todoToUpdate.text = newText;
              localStorage.setItem("todos", JSON.stringify(state));
            }   
        }     
    }
})

export const {addTodo, removeTodo , updateTodo} = todoSlice.actions;
//  we also need to export these individual methods as whenever we are going to use dispatch these individual method are goint to get in use . 
export default todoSlice.reducer;
// export the reducers which will used in the stores .