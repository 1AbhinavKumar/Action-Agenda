import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import Todos from "./Todos";
import bg_image from "../assests/bg_image.jpg";

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
    <div
      className="min-h-screen flex justify-center"
      style={{
        backgroundImage: `url(${bg_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full flex-grow ">
        <h1 className="pt-16 pb-3 text-center text-white text-5xl sm:text-8xl font-bold font-qwithergryphen">
          Action Agenda
        </h1>
        <form onSubmit={addTodoHandler} className=" ml-3 mr-3">
          <input
            id="form"
            type="text"
            value={input}
            placeholder="Enter your actions"
            className="rounded-md p-2 sm:w-1/2 w-full bg-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 "
            onChange={(e) => setInput(e.target.value)}
            style={{ overflowWrap: "break-word", maxWidth: "100%" }}
          />
          <button
            type="submit"
            className="m-2 p-2 bg-blue-500 text-white rounded-md"
          >
            Add Action
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
