import { useState } from 'react'
import './App.css'

import WebApp from '@twa-dev/sdk'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {(WebApp.headerColor = '#0088ff')}
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
      <div className="jsonBox">{JSON.stringify(WebApp)}</div>
      <div className="card">
        <button
          onClick={() =>
            WebApp.showAlert(`Hello World! Current count is ${count}`, () => {
              setCount(100)
            })
          }
        >
          Show Alert
        </button>
      </div>
    </>
  )
}

export default App
