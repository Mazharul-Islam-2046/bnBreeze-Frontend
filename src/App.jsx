import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'
import './App.css'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline font-heading">Bn Breeze</h1>

      <Outlet/>
      
      <ToastContainer/>
    </>
  )
}

export default App
