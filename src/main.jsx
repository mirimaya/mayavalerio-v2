import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import About from './Pages/About.jsx'
import Projects from './Pages/Projects.jsx'

const router = createBrowserRouter([
  {path: "/", element: <App/>},
  {path: "/about", element: <About/>},
  {path: "/projects", element: <Projects/>}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
