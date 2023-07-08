import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export interface Task {
  id: string;
  description: string;
  isDone: boolean;
}

export type TodoContextType = {
  tasks: Task[];
  addTask: (task: string) => void;
  removeTask: (id: string) => void;
  changeStatus: (id: string) => void;
}

export const TodoContext = createContext<TodoContextType>({
  tasks: [],
  addTask: (task: string) => {},
  removeTask: (id: string) => {},
  changeStatus: (id: string) => {},
});

const todoListItemName = "todo-list";

const getTodoList = () => {
  const stringContent = localStorage.getItem(todoListItemName);
  return JSON.parse(stringContent!) as Task[];
}

export type TodoProviderProps = {
  children: React.ReactNode;
};

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [tasks, setTasks] = useState([] as Task[]);
  
  useEffect(()=>{
    const todoList = localStorage.getItem(todoListItemName);
    
    if(todoList){
      setTasks(JSON.parse(todoList));
    } else {
      localStorage.setItem(todoListItemName,JSON.stringify([]));
    }
  },[]);

  const addTask = (description: string) => {
    const todoList = getTodoList();
    const newTask: Task = {
      id: uuidv4(),
      description,
      isDone: false
    }
    todoList.push(newTask);
    localStorage.setItem(todoListItemName, JSON.stringify(todoList));
    setTasks(todoList);
  }
  
  const removeTask = (id: string) => {
    let todoList = getTodoList();
    todoList = todoList.filter(task => task.id !== id)
    localStorage.setItem(todoListItemName, JSON.stringify(todoList));
    setTasks(todoList);
  }

  const changeStatus = (id: string) => {
    let todoList = getTodoList();
    todoList.forEach(task => {
      if (task.id === id) task.isDone = !task.isDone;
    });
    localStorage.setItem(todoListItemName, JSON.stringify(todoList));
    setTasks(todoList);
  }

  const value = {
    tasks,
    addTask,
    removeTask,
    changeStatus
  };

  return <TodoContext.Provider value={value}>
    {children}
  </TodoContext.Provider>
}

export default TodoProvider;
