import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editableTodo, setEditableTodo] = useState(null);
  const [updatedText, setUpdatedText] = useState("");

  const handleUpdateClick = (todo) => {
    setEditableTodo(todo.id);
    setUpdatedText(todo.text);
  };

  const handleUpdateSubmit = () => {
    dispatch(updateTodo({ id: editableTodo, newText: updatedText }));
    setEditableTodo(null);
  };

  return (
    <>
      <div className=" ">
        <h1 className="text-2xl font-bold mb-2">Todos</h1>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between m-2 p-2 border-2 rounded "
          >
            {editableTodo === todo.id ? (
              <>
                <textarea
                  className="whitespace-pre-wrap border-none resize-none focus:outline-none w-full"
                  value={updatedText}
                  onChange={(e) => setUpdatedText(e.target.value)}
                />
                <FontAwesomeIcon
                  icon={faCheck}
                  onClick={handleUpdateSubmit}
                  className="cursor-pointer text-black ml-2"
                />
              </>
            ) : (
              <>
                <div className="whitespace-pre-wrap scrollbar-thin overflow-y-auto scrollbar-thumb-black scrollbar-track-transparent scroll-smooth scrollbar-corner-slate-800">{todo.text}</div>
                <div className="flex">
                  <FontAwesomeIcon
                    icon={faEdit}
                    onClick={() => handleUpdateClick(todo)}
                    className="cursor-pointer text-black ml-2"
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="cursor-pointer text-red-900 ml-2"
                  />
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
