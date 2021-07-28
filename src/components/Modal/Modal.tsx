import React, {Dispatch, SetStateAction} from 'react';
// import styles from './Modal.module.scss';
import '../../styles/_modal.scss'
import styles from "../TodoForm/TodoForm.module.scss"; // styles for edit input

interface IModal {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  type: string;
}

export const Modal: React.FC<IModal> = ({active, setActive, type}) => {

  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className={active ? "modal-content active" : "modal-content"} onClick={e => e.stopPropagation()}>

        {type === 'delete' &&
          <div>
            <h3 className={"heading"}>{type}</h3>
            <p className={"text-confirm"}>Are you sure you want to delete this item?</p>
            <div className="buttons-modal-block">
              <span className="cancel btn modalBtn" onClick={()=>setActive(false)}>Cancel</span>
              <span className="delete btn modalBtn">Delete</span>
            </div>
          </div>
        }

        {type === 'edit' &&
          <div>
            <h3 className={"heading"}>{type}</h3>
            <p className={"text-confirm"}>Enter new title if you want to edit this item.</p>
            <div className={styles.inputField}>
              <input
                type="text"
                id="newTitle"
                placeholder={"Enter title"}
                className={styles.title}
                maxLength={1000}
              />
              <label htmlFor="newTitle" className={styles.active}>
                Enter title
              </label>
            </div>
            <div className="buttons-modal-block">
              <span className="cancel btn modalBtn" onClick={()=>setActive(false)}>Cancel</span>
              <span className="save btn modalBtn">Save</span>
            </div>
          </div>
        }
        {/*if state not changed - Error*/}
        {type === 'Error' &&
        <div>
          <h3 className={"heading"}>{type}</h3>
          <p className={"text-confirm"}>Something went wrong!</p>
          <div className="buttons-modal-block">
            <span className="cancel btn modalBtn" onClick={()=>setActive(false)}>Cancel</span>
          </div>
        </div>
        }

      </div>
    </div>
  )
};


export default Modal;
