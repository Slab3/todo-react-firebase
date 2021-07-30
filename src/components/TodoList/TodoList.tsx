import React from 'react';
// import styles from './TodoList.module.scss'
import {ITodo} from '../../interfaces';
import Todo from "../Todo/Todo";

interface ITodoListProps {
  todos: ITodo[]          // this component receives "filterTodos"
  onToggle(id: string): void //принимаем id num, и возвращаем void
  onRemove(id: string): void
  onEdit(id: string, newTitle: string): void
}
// в эти функции надо передавать нужный айди. Когда кликаем на удаление, то здесь можно обработать
// событие onclick, тут я передаю колбек где вызовываю функцию onRemove/onToggle с значением todo.id

export const TodoList: React.FC<ITodoListProps> = ({ todos, onToggle, onRemove, onEdit }) => {

  if (todos.length === 0) {
    return (
      <li style={{textAlign: "center"}}>There are no tasks yet!</li>
    )
  }

  return (
    <div >
      <ul className={"todos"}>
        {todos.map(todo => { // map thru "todos" filtered by search input value

          return (
            <Todo
              title={todo.title}
              id={todo.id}
              completed={todo.completed}
              key={todo.id}
              onToggle={onToggle}
              onRemove={onRemove}
              onEdit={onEdit}
            />
          );
        })}
      </ul>
    </div>
  )
};

export default TodoList;
