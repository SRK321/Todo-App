import React from "react";
import TodoItem from "./TodoItem";

export default function TodoItems({ items, onDeleteClick }) {
  return (
    <>
      {items.map((item) => (
        <TodoItem
          key={item.name}
          name={item.name}
          date={item.date}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </>
  );
}
