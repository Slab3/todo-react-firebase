import React, {useState} from 'react';
import Header from '../components/Header/Header';
import TodoForm from '../components/TodoForm/TodoForm';
import '../styles/main.scss'
import {TodoList} from "../components/TodoList/TodoList";
import {ITodo} from "../interfaces";

function Home() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(), // ---------- add random id generator
      completed: false
    };
    // setTodos([newTodo, ...todos])
    setTodos(prev => [newTodo, ...prev])
    // колбек для того, чтобы не было случаев когда данные ещё не обновились, а уже поступают новые
  };

  const toggleHandler = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    )
  };

  const removeHandler = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  };

  return (
    <div>
      <Header />
      <TodoForm onAdd={addHandler}/>
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </div>
  );
}

export default Home;
