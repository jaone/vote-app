import { useState } from 'react'
import logo from './logo.svg'
import ListPage from '@/pages/ListPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='submit-link'>
        submit a link
      </div>
      <hr />
      <ListPage />
    </div>
  )
}

export default App
