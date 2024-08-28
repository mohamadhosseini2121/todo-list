"use client";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import React, { createContext, ReactNode, useContext } from "react";

export type TodoModel = {
  id: number;
  title: string;
  completed: boolean;
};

type TodoProviderProps = {
  children: ReactNode;
};
type TodoContext = {
  todoList: TodoModel[];
  removeTodo: (id: number) => void;
  createTodo: (title: string) => void;
  updateTodo: (id: number, title: string, completed: boolean) => void;
};

const TodoContext = createContext<TodoContext>({
  todoList: [],
  removeTodo: () => {},
  createTodo: () => {},
  updateTodo: () => {},
} as TodoContext);

export function useTodo() {
  return useContext(TodoContext);
}

export function TodoProvider({ children }: TodoProviderProps) {
  const [todoList, setTodoList] = useLocalStorage<TodoModel[]>("todos", []);

  function removeTodo(id: number) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  function createTodo(title: string) {
    setTodoList([...todoList, { id: Date.now(), title, completed: false }]);
  }

  function updateTodo(id: number, title: string, completed: boolean) {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title, completed };
        }
        return todo;
      })
    );
  }

  return (
    <TodoContext.Provider
      value={{
        todoList,
        createTodo,
        updateTodo,
        removeTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
