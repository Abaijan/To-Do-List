import React from 'react'
import s from './Task.module.css'
import cross from './cross.png'

const Task = ({value, deleteTask, id , doneTask, isDone}) => {
  return (
    <li className={s.box_task}>
        <label>
            <input type="checkbox"
             className={s.check}
             checked={isDone}
             onClick={() => doneTask(id)}
              />
            <p className={`${isDone ? s.box_task_done : null}`}>{value}</p>
        </label>
        <button className={s.cross} onClick={() => deleteTask(id)}>
            <img className={s.img} src={cross} alt="" />
        </button>
    </li>
  )
}

export default Task;