import styles from './App.module.css';

import { Header } from './components/Header/Header';
import { SearchContainer } from './components/SearchContainer/SearchContainer';
import { Task } from './components/Task/Task';

import { HiClipboardDocumentList } from "react-icons/hi2";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


interface Task {
  id: string;
  message: string;
};

export interface TaskProps {
  task: Task;
  deleteTask: (id: string) => void;
};

export function App() {

  const [tasks, setTasks] = useState<Task[]>([]);


  function addTask(message: string) {
    const newTask = {
      id: uuidv4(),
      message,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    console.log('chegou aqui no fim da adicao de task');

  };

  function deleteTask(idTaskToDelete: string) {
    const tasksListWithDeleete  = tasks.filter( task => {
      return task.id !== idTaskToDelete;
    });
    setTasks(tasksListWithDeleete);
  } 

  return (
    <main>
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
              <p >{tasks.length}</p>
            </div>
            <div className={styles.title_and_accountant}>
              <h3 className={styles.title_completed_tasks}>Concluídas</h3>
              <p className={styles.count_tasks_completed}>0</p>
            </div>
          </div>

          <div className={styles.info_container}>
            {tasks.length === 0 ? (
              <div className={styles.text_for_zero_tasks}>
                <HiClipboardDocumentList size={56} />
                <span>Você ainda não tem tarefas cadastradas</span>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div> 
            ) 
            : (
              tasks.map( task => {
                return (
                  <Task 
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                  />
                )
              })
            )}

          </div>
        </div>
      </div>
    </main>
  )
}

export default App
