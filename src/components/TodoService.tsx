import TodoTypes from "./todo";

const LOCAL_STORAGE_KEY = "todos";

const TodoService = {
  getTodos: (): TodoTypes[] => {
    try {
      const todoStr = localStorage.getItem(LOCAL_STORAGE_KEY);
      return todoStr ? JSON.parse(todoStr) : [];
    } catch (error) {
      console.error("Error getting todos from localStorage", error);
      return [];
    }
  },

  addTodo: (text: string): TodoTypes => {
    const todos = TodoService.getTodos();
    const newTodo: TodoTypes = { id: Date.now(), text, completed: false };

    const updatedTodos = [...todos, newTodo];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
    return newTodo;
  },

  updateTodo: (todo: TodoTypes): TodoTypes => {
    const todos = TodoService.getTodos();
    const updatedTodos = todos.map((t) =>
      t.id === todo.id ? { ...t, ...todo } : t
    );

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
    return todo;
  },

  deleteTodo: (id: number): void => {
    const todos = TodoService.getTodos();
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
  },
};

export default TodoService;
