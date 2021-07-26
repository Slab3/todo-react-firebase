import React, {useState} from 'react'
import styles from './TodoForm.module.scss';

interface ITodoFormProps {
  onAdd(title:string): void //принимаем title: string, и возвращаем void
}

export const TodoForm: React.FC<ITodoFormProps> = (props) => {
  const [title, setTitle] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };


  function addTodo() {
    if (title === "") {
      alert("Input field cannot be empty!") // add popover
    } else if (title[0] === " ") {
      alert("The title cannot start with a space!")
    } else {
      props.onAdd(title);
      setTitle("");
    }
  }
  const keyPressHandler = (event: React.KeyboardEvent) => { if (event.key === "Enter") { addTodo() } };
  const clickAddHandler = (event: React.MouseEvent) => { addTodo() };

  return (
    <div > {/*className="container"*/}
      <div className={styles.inputField}>
        <input
          type="text"
          id="title"
          placeholder={"Enter title"}
          className={styles.title}
          value={title}
          onChange={changeHandler}
          onKeyPress={keyPressHandler}
          maxLength={1000}
          // autoComplete={"off"}
        />
        <label htmlFor="title" className={styles.active}>
          Enter title
        </label>
        <b className="addIcon btn" onClick={clickAddHandler}>+</b>
      </div>
    </div>
  )
};

export default TodoForm;
