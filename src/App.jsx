import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LoadingIcons from 'react-loading-icons'
import './App.css'
import About from './about'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <h1>Minha página em React - Marlon Prudente</h1>
      <div className="card">        
        <p>
          Uma página feita em <code>React</code>.
        </p>
        <LoadingIcons.Audio />
        <About/>
      </div>
      <p className="read-the-docs">
      Copyright &copy; Marlon Prudente - Todos os direitos reservados.
      </p>
    </>
  )
}



export default App
