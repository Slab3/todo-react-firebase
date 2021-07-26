import React, {useState, useEffect} from 'react';
import Header from '../components/Header/Header';
import TodoForm from '../components/TodoForm/TodoForm';
import '../styles/main.scss'
import {TodoList} from "../components/TodoList/TodoList";
import {ITodo} from "../interfaces";
import {randomUniqueString} from '../util';

function Home() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  // getting data from localstorage and set data.
  useEffect(()=> {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    setTodos(saved);
  }, []);

  useEffect(()=> {
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);
  // getting data from localstorage


  // createNewTodo
  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: randomUniqueString('id-'),
      completed: false
    };
    // setTodos([newTodo, ...todos])
    setTodos(prev => [newTodo, ...prev])
    // колбек для того, чтобы не было случаев когда данные ещё не обновились, а уже поступают новые
  };

  const toggleHandler = (id: string) => {
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

  const removeHandler = (id: string) => {
    const confirmDeletion = window.confirm('Are you sure, you want to delete element?');
    if (confirmDeletion) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
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
