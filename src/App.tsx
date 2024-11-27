import styles from './App.module.css';

import { Header } from './components/Header/Header'
import { SearchContainer } from './components/SearchContainer/SearchContainer';


export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.searchBar}>
          <SearchContainer />
        </div>
      </div>
    </div>
  )
}

export default App
