import styles from './Task.module.css';
import { RiCheckboxCircleFill } from "react-icons/ri";
// import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { TbTrash } from "react-icons/tb";
import { TaskProps } from '../../App';




export function Task({task}: TaskProps) {
    return (
        <div className={styles.task_container}>
            
            <div className={styles.icon_checkbox}>
                <RiCheckboxCircleFill size={24}/>
                {/* <RiCheckboxBlankCircleLine /> */}
            </div>

            <div className={styles.menssage_task}>
                <p className={styles.info_task}>{task.message}</p>
            </div>

            <div className={styles.icon_trash}>
                <TbTrash size={24}/>
            </div>
        </div>
    )
};