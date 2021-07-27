import React from 'react';
import styles from './Modal.module.scss';

export const Modal: React.FC = () => {
  return (
    <div className={styles.modal}>
      <h1>Modal</h1>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, maiores?
    </div>
  )
};

export default Modal;
