import styles from './App.module.css';

import { Header } from './components/Header/Header'
import { SearchContainer } from './components/SearchContainer/SearchContainer';

import { HiClipboardDocumentList } from "react-icons/hi2";
import { Task } from './components/Task/Task';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


interface Task {
  id: string;
  message: string;
}

export interface TaskProps {
  task: Task;
}

export function App() {

  const [tasks, setTasks] = useState<Task[]>([{id: uuidv4(), message: 'testando mensagem'}]);


  function addTask(message: string) {
    const newTask = {
      id: uuidv4(),
      message,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    console.log('chegou aqui no fim da adicao de task');

  };

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.searchBar}>
          <SearchContainer 
            addTask={addTask}
            />
        </div>
        
        <div className={styles.container_tasks}>

          <div className={styles.header_container_tasks}>
            <div className={styles.title_and_accountant}>
              <h3 className={styles.title_created_tasks}>Tarefas criadas</h3>
              <p>{tasks.length}</p>
            </div>
            <div className={styles.title_and_accountant}>
              <h3 className={styles.title_completed_tasks}>Concluídas</h3>
              <p>0</p>
            </div>
          </div>

          <div className={styles.info_container}>
            {tasks.length === 0 ? (
              <>
                <HiClipboardDocumentList size={56} />
                <span>Você ainda não tem tarefas cadastradas</span>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </>  
            ) 
            : (
              tasks.map( task => {
                return (
                  <Task 
                    task={task}
                  />
                )
              })
            )}

          </div>
        </div>
      </div>
    </div>
  )
}

export default App
