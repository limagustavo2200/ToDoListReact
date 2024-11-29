import styles from './Task.module.css';
import { RiCheckboxCircleFill } from "react-icons/ri";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { TbTrash } from "react-icons/tb";
import { TaskProps } from '../../App';
import { useState } from 'react';



export function Task({task, deleteTask}: TaskProps) {

    const [complitedTask, setCompletedTask] = useState(false);

    function handleDeleteTask() {
        deleteTask(task.id);
    }

    function handleFinishTask() {
        setCompletedTask(!complitedTask);
    }

    return (
        <div className={styles.task_container}>
            
            <button onClick={handleFinishTask} className={styles.icon_checkbox}>
                {complitedTask ? <RiCheckboxCircleFill size={24} className={styles.icon_task_notCompleted}/> 
                : <RiCheckboxBlankCircleLine size={24} className={styles.icon_task_Completed}/>}
            </button>

            <div className={styles.message_task}>
                { complitedTask ? <p className={styles.info_task_completed}>{task.message}</p>
                    : <p className={styles.info_task}>{task.message}</p>}
            </div>

            <div className={styles.icon_trash}>
                <button onClick={handleDeleteTask}>
                    <TbTrash size={24}/>
                </button>
            </div>
        </div>
    )
};