import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchTodos from "../redux/thunk/fetchTodos";
import Todo from "./Todo";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos);
  }, [dispatch]);
  const filterByStatus = (todo) => {
    const { status } = filters;
    switch (status) {
      case "completed":
        return todo.completed;
      case "incompleted":
        return !todo.completed;
      default:
        return true;
    }
  };
  const filterByColors = (todo) => {
    const { colors } = filters;
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }
    return true;
  };
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter(filterByStatus)
        .filter(filterByColors)
        .map((todo) => (
          <Todo todo={todo} key={todo.id}></Todo>
        ))}
    </div>
  );
};

export default TodoList;
