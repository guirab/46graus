"use client";

import { useContext, useEffect, useState } from "react";
import { TodoListContext } from "../store";

export const TodoList = () => {
  const [inputValue, setInputValue] = useState("");

  const { list, setList } = useContext(TodoListContext);

  useEffect(() => {
    setInputValue("");
  }, [list]);

  const adicionarItem = () => {
    if (inputValue) {
      setList(
        list.concat({ task: inputValue, id: Math.random(), completed: false })
      );
    }
  };

  return (
    <div>
      {list.map((item, index) => (
        <div key={index}>
          <div
            className={[
              item.completed ? "line-through" : "",
              " cursor-pointer flex",
            ].join("")}
          >
            <div
              onClick={() =>
                setList(
                  list.map((i) =>
                    i.id === item.id ? { ...i, completed: !i.completed } : i
                  )
                )
              }
            >
              {item.task}&nbsp;{item.id}&nbsp;
            </div>
            <button
              onClick={() => setList(list.filter((i) => i.id !== item.id))}
            >
              remover
            </button>
          </div>
        </div>
      ))}
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="text-red-500"
        />
        <button onClick={adicionarItem}>&nbsp;adicionar</button>
      </div>
    </div>
  );
};
