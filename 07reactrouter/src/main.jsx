import React from 'react'
import ReactDOM from 'react-dom/client'
import './input.css'
import App from './App.jsx'
import './input.css'
import { Route, RouterProvider , createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import GitHub from './components/Github/Github.jsx'
import { githubInfoloader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//     {
//         path:'/',
//         element:<Layout/>,
//         children:[
//             {
//                 path:"",
//                 element:<Home/>
//             },
//             {
//                 path:"about",
//                 element:<About/>
//             },
//             {
//                 path:"contact",
//                 element:<Contact/>
//             }
//         ]
//     }
// ])


const router  = createBrowserRouter(  
    createRoutesFromElements(  // iske andrr routes bnaa te 
        <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='Contact' element={<Contact/>}/>
            <Route path='user/:userid' element={<User/>}/>  
            <Route
            loader={githubInfoloader}
            path='Github' element={<GitHub/>}/>  
        </Route>
    )
)
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>  
    </React.StrictMode>,
)

