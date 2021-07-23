import React from 'react';
import {ITodo} from "../../interfaces";

interface ITodoListProps {
  todos: ITodo[]
  onToggle(id: string): void //принимаем id num, и возвращаем void
  onRemove(id: string): void
}
// в эти функции надо передавать нужный айди. Когда кликаем на удаление, то здесь можно обработать
// событие onclick, тут я передаю колбек где вызовываю функцию onRemove/onToggle с значением todo.id

export const TodoList: React.FC<ITodoListProps> = ({ todos, onToggle, onRemove }) => {
  if (todos.length === 0) {
    return (
      <li style={{textAlign: "center"}}>There are no tasks yet!</li>
    )
  }

  //test removeHandler
  const removeHandler = (event: React.MouseEvent, id: string) => {
    event.preventDefault(); //without this if press "delete"+"cancel" todoItem marks as "completed"
    onRemove(id)
  };

  return (
    <ul className={"container todos"}>
      {todos.map(todo => {
        const classes = ['todo']; // classes for every todo
        if (todo.completed) {
          classes.push('completed')
        }
        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={()=> onToggle(todo.id)}
              />
              <span>{todo.title}</span>
              <b className="deleteIcon" onClick={event => removeHandler(event, todo.id)}>×</b>
            </label>
          </li>
        );
      })}
    </ul>
  )
};
