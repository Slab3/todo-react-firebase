import React, {useState} from 'react';
import {ITodo} from "../../interfaces";
import styles from "./Todo.module.scss";


interface ITodoComp extends ITodo {
  onToggle(id: string): void
  onRemove(id: string): void
  onEdit(id: string, newTitle: string): void
}

export const Todo: React.FC<ITodoComp> = ({ title, id, completed, onToggle, onRemove, onEdit }) => {
  const [isEditing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  // CSS CLASSES for todo items
  const classes = ["todo"];
  if (completed) {
    classes.push("completed")
  }

  // REMOVE todo handler
  const removeHandler = (event: React.MouseEvent, id: string) => {
    event.preventDefault(); //without this if press "delete"+"cancel" todoItem marks as "completed"
    onRemove(id);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value)
  };
  // SAVE todo handler's
  function saveTodo() {
    // event.preventDefault();
    onEdit(id, newTitle);
    // setNewTitle("");
    setEditing(false);
  }

  const keyPressSave = (event: React.KeyboardEvent) => { if (event.key === "Enter") {saveTodo()} };
  const handleSave = (event: React.MouseEvent) => { saveTodo() };


  const viewTemplate = (
    <li className={classes.join(" ")} key={id}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={()=> onToggle(id)}
        />
        <span className={"todoTitle"}>{title}</span>
        <b className="editIcon btn" onClick={()=>setEditing(true)}> </b> {/*symbol - alt255*/}
        <b className="deleteIcon btn" onClick={(event) => removeHandler(event, id)}> </b>
      </label>
    </li>
  );

  const editingTemplate = (
    <div >
      <div className={styles.inputField}>
        <input
          type="text"
          id={id}
          placeholder={"Enter new title"}
          className={styles.title}
          value={newTitle}
          onChange={handleChange}
          onKeyPress={keyPressSave}
          maxLength={1000}
          // autoComplete={"off"}
        />
        <label htmlFor={id} className={styles.active}>
          Enter new title for: "{title}"
        </label>
        <div className={styles.buttonsEditBlock}>
          <span
            className={`${styles.cancel} ${styles.editBtn}`}
            onClick={()=> {setNewTitle(title); setEditing(false)}}
          >
            Cancel
          </span>
          <span
            className={`${styles.save} ${styles.editBtn}`}
            onClick={handleSave}
          >
            Save
          </span>
        </div>
      </div>
    </div>
  );


  return (
    <div>{isEditing ? editingTemplate : viewTemplate}</div>
  )
};

export default Todo;
