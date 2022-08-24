import React, { useState } from "react";
import { useDispatch } from "react-redux";
import doubleTikImage from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";
import addTodo from "../redux/thunk/addTodo";
import { allCompleted, clearCompleted } from "../redux/todos/actions";
const Header = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleInput = (e) => {
    setInput(e.target.value);
    console.log(input);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  const completeAll = () => {
    dispatch(allCompleted());
  };
  const clearComplete = () => {
    dispatch(clearCompleted());
  };
  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={submitHandler}
      >
        <img src={noteImage} className="w-6 h-6" alt="Add todo" />
        <input
          onChange={handleInput}
          value={input}
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url(${plusImage})] bg-no-repeat bg-contain`}
        ></button>
      </form>
      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li onClick={completeAll} className="flex space-x-1 cursor-pointer">
          <img className="w-4 h-4" src={doubleTikImage} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li onClick={clearComplete} className="cursor-pointer">
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
