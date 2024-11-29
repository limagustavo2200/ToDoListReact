import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './SearchContainer.module.css';
import { IoMdAddCircleOutline } from "react-icons/io";


interface SearchContainerProps {
    addTask: (message: string) => void;
}

export function SearchContainer({ addTask }: SearchContainerProps) {

    const [newMessageTask, setNewMessageTask] = useState('');

    function handleAddTask(event: FormEvent) {
        event.preventDefault();
        addTask(newMessageTask);
        console.log('chegou aqui depois de dar o submit');
        setNewMessageTask('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value);
        setNewMessageTask(event.target.value);
    }

    return (
        <form onSubmit={handleAddTask} className={styles.searchContainer}>
            <input 
                type="text" 
                placeholder='Adicione uma nova tarefa'
                value={newMessageTask}
                onChange={handleNewTaskChange}
                required
            />

            <button type='submit'>
                Criar
                <IoMdAddCircleOutline size={20}/>
            </button>
        </form>
    )
}