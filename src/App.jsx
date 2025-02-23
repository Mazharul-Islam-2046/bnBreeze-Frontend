import { Outlet } from 'react-router'
import './App.css'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline font-heading">Bn Breeze</h1>

      <Outlet/>
    </>
  )
}

export default App
