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

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      if (title !== '') {
        props.onAdd(title);
        setTitle("");
      } else alert("Input field cannot be empty!"); // add popover
    }
  };

  return (
    <div className="container">
      <div className={styles.inputField}>
        <input
          type="text"
          id="title"
          placeholder={"Enter title"}
          className={styles.title}
          value={title}
          onChange={changeHandler}
          onKeyPress={keyPressHandler}
          // autoComplete={"off"}
        />
        <label htmlFor="title" className={styles.active}>
          Enter title
        </label>
      </div>

    </div>
  )
};

export default TodoForm;
