import styles from './SearchContainer.module.css';
import { IoMdAddCircleOutline } from "react-icons/io";



export function SearchContainer() {
    return (
        <div className={styles.searchContainer}>
            <input 
                type="text" 
                placeholder='Adicione uma nova tarefa'
            />

            <button type='submit'>
                Criar
                <IoMdAddCircleOutline size={20}/>
            </button>
        </div>
    )
}