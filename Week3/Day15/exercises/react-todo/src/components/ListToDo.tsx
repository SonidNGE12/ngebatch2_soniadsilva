import React from 'react';
import ToDoItem from './ToDoItem';
export interface todo{
    id: number;
    task: string;
    complete: boolean;  
}

export interface ListToDoProps{
    todos: todo[];
}

export default function ListToDo(props:ListToDoProps) {
    return (
      <div>
        {props.todos.map((todo: any) => (
          <ToDoItem todo={todo} />
        ))}
      </div>
    );
}

