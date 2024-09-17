import { useState } from "react";
import TodoService from "./TodoService";
import TodoTypes from "./todo";
import { FaCheck, FaEdit } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";

const TodoList = () => {
  const [todos, setTodos] = useState<TodoTypes[]>(TodoService.getTodos());
  const [editingTodoId, setEditingTodoId] = useState<number | null>(null);
  const [editedTodoText, setEditedTodoText] = useState<string>("");
  const [newTodoText, setNewTodoText] = useState<string>("");

  const handleEditStart = (id: number, text: string) => {
    setEditingTodoId(id);
    setEditedTodoText(text);
  };

  const handleEditCancel = () => {
    setEditingTodoId(null);
    setEditedTodoText("");
  };

  const handleEditSave = (id: number) => {
    if (editedTodoText.trim() !== "") {
      const updateTodo = TodoService.updateTodo({
        id,
        text: editedTodoText,
        completed: false,
      });
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? updateTodo : todo))
      );

      setEditingTodoId(null);
      setEditedTodoText("");
    }
  };

  const handleDeleteTodo = (id: number) => {
    TodoService.deleteTodo(id);
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      const newTodo = TodoService.addTodo(newTodoText);
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTodoText("");
    }
  };

  return (
    <div className="max-w-md mt-20 mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Add a Task..."
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          className="flex-1 border border-gray-300 rounded-l-md p-2"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white rounded-r-md p-2 hover:bg-blue-600"
        >
          SAVE
        </button>
      </div>
      {todos.map((todo) => (
        <div
          className="flex items-center justify-between bg-gray-100 p-2 mb-2 rounded-md"
          key={todo.id}
        >
          {editingTodoId === todo.id ? (
            <div className="flex items-center w-full">
              <input
                type="text"
                value={editedTodoText}
                onChange={(e) => setEditedTodoText(e.target.value)}
                className="flex-1 border border-gray-300 rounded-l-md p-2"
                autoFocus={true}
              />
               <button
                onClick={() => handleEditSave(todo.id)}
                className="bg-green-500 text-white rounded-md p-2 hover:bg-green-600 ml-2"
              >
                <FaCheck />
              </button>
              <button
                className="bg-red-500 text-white rounded-md p-2 ml-2 hover:bg-red-600"
                onClick={handleEditCancel}
              >
                <GiCancel />
              </button>
            </div>
          ) : (
            <div className="flex items-center w-full">
              <span className="flex-1">{todo.text}</span>
              <button
                onClick={() => handleEditStart(todo.id, todo.text)}
                className="text-blue-500 hover:text-blue-700"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700 ml-2"
              >
                <GiCancel />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
