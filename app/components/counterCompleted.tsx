"use client";

import { useContext } from "react";
import { TodoListContext } from "../store";

export const CounterCompleted = () => {
  const { list } = useContext(TodoListContext);
  const completed = list.filter((item) => item.completed);
  return <div>Todos completos: &nbsp;{completed.length}</div>;
};
