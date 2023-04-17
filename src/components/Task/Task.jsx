import { useState } from 'react';
import s from './Task.module.css';
import cross from './cross.png';
import importnt from './important.svg';

const Task = ({ value, deleteTask, id, doneTask, isDone, }) => {

  const [important , setImportant] = useState(false);

  const onImportant  = () => {
    setImportant((current) => !current)
  } 

  
  return (
    <li
      className={important ? s.red : s.box_task}
      id='btn'
      
    >
      <label>
        <input type="checkbox"
          className={s.check}
          checked={isDone}
          onClick={() => doneTask(id)}
        />
        <p className={`${isDone ? s.box_task_done : null}`}>{value}</p>
      </label>
      <button className={s.cross} onClick={() => deleteTask(id)}>
        <img className={s.img} src={cross} alt='' />
      </button>
      <button onClick={onImportant} className={s.important_btn}><img src={importnt} alt='' /></button>
    </li>
  )
}

export default Task;