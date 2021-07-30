import React from 'react';
// import styles from "./Input.module.scss";
import styles from "./InputOutlined.module.scss";

interface IInputSign {
  type: string
  id: string
  maxWidth?: number
  placeholder: string
  value: string
  setValue(event: React.ChangeEvent<HTMLInputElement>): void
}

export const Input: React.FC<IInputSign> = ({type, id, maxWidth = 800, placeholder, value, setValue}) => {

  return (
    <div className={styles.inputField} style={{maxWidth: `${maxWidth}px`}}>
      <input
        type={type}
        id={id}
        placeholder={`Enter ${placeholder}`}
        className={styles.title}
        value={value}
        onChange={setValue}
        // onKeyPress={keyPressHandler}
        maxLength={1000}
        autoComplete={"off"}
      />
      <label htmlFor={id} className={styles.active}>
        Enter {placeholder}
      </label>
    </div>
  )
};

export default Input;
