import { useState } from 'react';
import s from './Task.module.css';
import cross from './cross.svg';
import importnt from './important.svg';
import importnt2 from './important2.svg'
const Task = ({ value, deleteTask, id, doneTask, isDone, }) => {

  const [important , setImportant] = useState(false);

  const onImportant  = () => {
    setImportant((current) => !current)
  } 

  
  return (
    <li
      className={important ? s.red : s.box_task}
      
    >
      <label>
        <input type="checkbox"
          className={s.check}
          checked={isDone}
          onClick={() => doneTask(id)}
        />
        <p className={`${isDone ? s.box_task_done : null}`}>{value}</p>
      </label>
      <button className={important ? s.cross1 : s.cross} onClick={() => deleteTask(id)}>
        <img className={s.img} src={cross} alt='' />
      </button>
      <button onClick={onImportant} className={important ?  s.important_btn1 : s.important_btn}><img src={important ? importnt2 : importnt } alt="" /></button>
    </li>
  )
}

export default Task;