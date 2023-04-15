import React from 'react'
import s from "./DeleteBlock.module.css"

const DeleteBlock = ({delComplited, deleteAll}) => {
  return (
    <div className={s.box_delete}>
        <button className={s.delete_completed} onClick={() => delComplited()}>Удалить завершенные</button>
        <button className={s.delete_all} onClick={() => deleteAll()}>Удалить все</button>
    </div>
  )
}

export default DeleteBlock;