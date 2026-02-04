
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home.jsx'
import About from "./components/About/About.jsx"
import Portfolio from './components/Portfolio/Portfolio.jsx'
import Contact from "./components/Contact/Contact.jsx"
import Layout from './components/Layout/Layout.jsx'



function App() {


  const router = createBrowserRouter([
    {path:"",element:<Layout/>,children:[
      {path:"",element:<Home/>},
      {path:"home",element:<Home/>},
      {path:"about",element:<About/>},
      {path:"portfolio",element:<Portfolio/>},
      {path:"contact",element:<Contact/>},
    ]},
    
  ])

  return (
    <>

      <RouterProvider router= {router}/>
    </>
  )
}

export default App
