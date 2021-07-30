import React from 'react';
import styles from './ButtonForm.module.scss';

interface IButtonForm {
  text: string
  maxWidth?: number
}

export const ButtonForm: React.FC<IButtonForm> = ({text, maxWidth = 300}) => {

  return (
    <div style={{maxWidth: `${maxWidth}px`}}>
      <button className={styles.buttonForm} >
        {text}
      </button>
    </div>
  )
};

export default ButtonForm;
