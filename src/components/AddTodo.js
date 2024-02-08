import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import Todos from "./Todos";


const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex justify-center ">
      <div className="max-w-sm md:max-w-lg flex-grow ">
        <h1 className="pt-16 pb-3 text-center text-white text-3xl font-bold">
          My Tasks
        </h1>
        <form onSubmit={addTodoHandler} className=" ml-3 mr-3 ">
          <input
            id="form"
            type="text"
            value={input}
            placeholder="Enter a Todo"
            className="rounded-sm p-2 w-full bg-white placeholder:text-gray-600 focus:outline-none  "
            onChange={(e) => setInput(e.target.value)}
            style={{ overflowWrap: "break-word", maxWidth: "100%" }}
          />
          <button
            type="submit"
            className="mt-2 p-2 bg-blue-500 text-white rounded-md"
          >
            Add Todo
          </button>
          <div className="mt-4">
            <Todos />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
