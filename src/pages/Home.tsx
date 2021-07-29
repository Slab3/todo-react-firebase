import React, {useState, useEffect} from 'react';
import TodoForm from '../components/TodoForm/TodoForm';
import '../styles/main.scss'
import {TodoList} from "../components/TodoList/TodoList";
import {ITodo} from "../interfaces";
import {randomUniqueString} from '../util';
import Filter from "../components/Filter/Filter";
import Modal from "../components/Modal/Modal";

function Home() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [search, setSearch] = useState<string>("");
  const [filterBy, setFilterBy] = useState<string>("");

  // modal test
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>('Error');
  // const [modalStatus, setModalStatus] = useState<boolean>(false);


  // filter handlers
  const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  };
  const filterSelectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilter = event.target.value;
    setFilterBy(selectedFilter);
  };

  let filterTodos = todos.filter((todo) => {
    return todo.title.toUpperCase().indexOf(search.toUpperCase()) >= 0;
  });
  if (filterBy === "all") {
    filterTodos = filterTodos.filter((todo) => todo);
  } else if (filterBy === "completed")  {
    filterTodos = filterTodos.filter((todo) => todo.completed);
  } else if (filterBy === "incompleted") {
    filterTodos = filterTodos.filter((todo) => !todo.completed);
  }

  // getting data from localstorage and set data.
  useEffect(()=> {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    setTodos(saved);
  }, []);

  useEffect(()=> {
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);

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
    // setModalType('delete');
    // setModalActive(true);
    const confirmDeletion = window.confirm('Are you sure, you want to delete element?');
    if (confirmDeletion) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  };

  const editHandler = (id: string, newTitle: string) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            title: newTitle
          }
        }
        return todo
      })
    )
  };

  return (
    <div>
      <TodoForm onAdd={addHandler}/>
      <Filter
        search={search}
        onSearchChange={searchChangeHandler}
        filterBy={filterBy}
        onSelectChange={filterSelectHandler}
      />
      <Modal active={modalActive} setActive={setModalActive} type={modalType}/> {/* not active */}
      <TodoList
        todos={filterTodos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
        onEdit={editHandler}
      />
    </div>
  );
}

export default Home;
