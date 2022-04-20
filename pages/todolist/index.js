import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [title, setTitle] = useState("");

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo({
      id: 4,
      title,
    });
    setTitle("");
  };

  useEffect(() => {
    const todos = localStorage.getItem("todos");
    if (todos) setTodos(JSON.parse(todos));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="h-auto shadow-lg w-1/4 border rounded-sm px-10 py-10 items-center justify-center">
      <div className="w-full">
        <input
          className="w-5/6 px-3 py-2 border-gray-500 border rounded-sm"
          placeholder="them moi"
          onChange={onTitleChange}
          value={title}
          required
        />
        <button
          className=" bg-purple-400 hover:bg-purple-700 ml-1 px-4 py-2 border-gray-500 border rounded-sm"
          onClick={handleSubmit}
        >
          add
        </button>
      </div>

      <ul className="w-full">
        {todos.map((todo) => (
          <li
            className="p-3 my-2 rounded-sm bg-gray-200 border hover:line-through"
            key={todo.id}
            onClick={deleteTodo.bind(this, todo.id)}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
