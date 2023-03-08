import React from 'react'
//interfaces
import { ITask } from '../interfaces/Task'
//css
import styles from './TaskList.module.css'


type Props = {
    taskList: ITask[]
    handleDelete(id: number) : void
    handleEdit(task:ITask):void
}

const TaskList = ({taskList, handleDelete,handleEdit}: Props) => {
  return (
    <>
    {taskList.length > 0 ? (
        taskList.map((task) => (
            <div key={task.id} className={styles.task}>
                <div className={styles.details}>
                    <h4>{task.title}</h4>
                    <p>Dificuldade: {task.difficulty}</p>
                </div>
                <div className={styles.actions}>
                    <i className="bi bi-pencil" onClick={() => handleEdit(task)}>Editar</i>
                    <i className='bi bi-x-lg' onClick={() => {handleDelete(task.id)}}>Excluir</i>
                </div>
            </div>
        ))
    ) : (
        <p>Não há tarefas Cadastradas</p>
    )}
    </>
  )
}

export default TaskList