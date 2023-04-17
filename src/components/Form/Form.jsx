import React from 'react'
import s from './Form.module.css'
import Task from '../Task/Task'

const Form = ({addTask, setValue, todo, value, deleteTask, doneTask, setImportant}) => {
  return (
    <>
        <div className={s.container}>
            <form 
            onSubmit={(e) => {
                e.preventDefault();
                addTask();
            }}
            >
                <input type='text'
                 className={s.input_task}
                  placeholder='add task'
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  />
                <button className={s.add}>Добавить</button>
            </form>
        </div>
        <ul className={`${s.list} ${!todo.length ? s.list_block : null}`}>
           {todo.map((el) => (
            <Task
            value={el.text}
            id={el.id}
            deleteTask={deleteTask}
            doneTask={doneTask}
            isDone={el.isDone}
            isImportant={el.isImportant}
            setImportant={setImportant}
            />
           ))}
        </ul>
    </>
  )
}

export default Form