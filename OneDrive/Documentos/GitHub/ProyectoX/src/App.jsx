import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">

{/*modifico los botones agregando aumentar, disminuir y resetear y se agrego el boton de conteo actual*/}

        <div style={{ marginBottom: '16px', fontSize: '1.5rem', color: '#61dafb' }}>
          Conteo actual: {count}
        </div>

        <button style={{ backgroundColor: "green", color: "white", padding: "10px", borderRadius: "5px" }}
        onClick={() => setCount((count) => count + 1)}> Aumentar 
        </button>


        <button style={{ backgroundColor: "red", color: "white", padding: "10px", borderRadius: "5px" }}
        onClick={() => setCount((count) => count - 1)}> Disminuir 
        </button>

        <button 
        style={{ backgroundColor: "gray", color: "white", padding: "10px", borderRadius: "5px" }}
        onClick={() => setCount((0))}> Resetear
        </button>

        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
