import React, {useState} from 'react';
import styles from './TodoList.module.scss'
import {ITodo} from '../../interfaces';

interface ITodoListProps {
  todos: ITodo[]
  onToggle(id: string): void //принимаем id num, и возвращаем void
  onRemove(id: string): void
}
// в эти функции надо передавать нужный айди. Когда кликаем на удаление, то здесь можно обработать
// событие onclick, тут я передаю колбек где вызовываю функцию onRemove/onToggle с значением todo.id

export const TodoList: React.FC<ITodoListProps> = ({ todos, onToggle, onRemove}) => {
  const [search, setSearch] = useState<string>("");
  const [filterBy, setFilterBy] = useState<string>("");

  if (todos.length === 0) {
    return (
      <li style={{textAlign: "center"}}>There are no tasks yet!</li>
    )
  }

  // removeHandler
  const removeHandler = (event: React.MouseEvent, id: string) => {
    event.preventDefault(); //without this if press "delete"+"cancel" todoItem marks as "completed"
    onRemove(id)
  };
  // searchHandler
  const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  };

  // filter by select value
  const filterByHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilter = event.target.value;
    setFilterBy(selectedFilter);
  };
  if (filterBy === "all") {
    todos = todos.filter((todo) => {
      return todo;
    });
  } else if (filterBy === "completed")  {
    todos = todos.filter((todo) => {
      return todo.completed;
    });
  } else if (filterBy === "incompleted") {
    todos = todos.filter((todo) => {
      return !todo.completed;
    });
  }

  // filtering items by search value before rendering
  let filterTodos = todos.filter((todo) => {
    return todo.title.toUpperCase().indexOf(search.toUpperCase()) >= 0;
  });


  return (
    <div > {/*className="container"*/}
      <div className={styles.filtration}>
        <div className={styles.searchBlock}>
          <input
            type="text"
            placeholder="Search item..."
            id="search"
            className={styles.search}
            value={search}
            onChange={searchChangeHandler}
            autoComplete={"off"}
          />
        </div>
        <div className={styles.selectSortBlock}>
          <label className={styles.labelSort} htmlFor="selectSortTodo">Sort by: </label>
          <select
            id="selectSortTodo"
            className={styles.selectSortTodo}
            name="filterBy"
            onChange={filterByHandler}
            value = {filterBy}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option> {/*Only Completed*/}
            <option value="incompleted">Incomplete</option>
          </select>
        </div>
      </div>
      {/* notes \/ */}
      <ul className={"todos"}>
        {filterTodos.map(todo => { // map thru "todos" filtered by search input value
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
                <span className={"todoTitle"}>{todo.title}</span>
                <b className="editIcon btn" onClick={()=> console.log("edit button")}> </b>
                <b className="deleteIcon btn" onClick={event => removeHandler(event, todo.id)}> </b>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  )
};
