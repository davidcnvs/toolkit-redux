import logo from './logo.svg'
import './App.css'
import { useSelector } from 'react-redux'

function App() {
  
  const {counter} = useSelector(state => state.counter);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => {}}>
            count is: {counter}
          </button>
        </p>
        
      </header>
    </div>
  )
}

export default App
