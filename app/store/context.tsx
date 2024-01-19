"use client";
import { ReactNode, createContext, useState } from "react";

export const TodoListContext = createContext<ContextProps>({} as ContextProps);

export const TodoListProvider = ({ children }: { children: ReactNode }) => {
  const [list, setList] = useState<TodoListProps[]>([
    { task: "Task 1", id: Math.random(), completed: false },
    { task: "Task 3", id: Math.random(), completed: false },
    { task: "Task 2", id: Math.random(), completed: false },
  ]);

  return (
    <TodoListContext.Provider value={{ list, setList }}>
      {children}
    </TodoListContext.Provider>
  );
};
