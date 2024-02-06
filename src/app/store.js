import {configureStore} from '@reduxjs/toolkit'
import todoReducer from "../features/todo/todoSlice"


export const store = configureStore({
    reducer: todoReducer,  //we have given the reducers here as we have imported since this store file should be accessed by all so we need to wrap it in index.js

})