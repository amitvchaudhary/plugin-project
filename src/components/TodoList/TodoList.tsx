import React from "react";
import { Todo } from "../Todo/Todo";

export const TodoList = (props: any) => {
  console.log('todolist ----');
  console.log(props);
  return (
    <div>
      {
        props.data.map((todo: any) => (
          <Todo key={todo.id} data={todo}></Todo>
        ))
      }
     
    </div>
  );
}