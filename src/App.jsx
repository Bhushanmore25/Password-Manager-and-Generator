import './App.css'
import Navbar from './componentes/Navbar'
import Manager from './componentes/Manager'
import Generatepass from './componentes/Generatepass.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<><Navbar/><Manager/></>
    },
    {
      path:'/generate',
      element:<><Navbar/><Generatepass/></>
    },
  ])

  return (
    <>
    <RouterProvider router={router}>
      {router.element}
    </RouterProvider>
    </>
  )
}

export default App
