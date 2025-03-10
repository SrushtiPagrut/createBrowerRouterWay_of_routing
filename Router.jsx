import { Router } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../Component/Home"
import About from "../Component/About"
import Contact from "../Component/Contact"
import Login from "../Component/Login"
import Register from "../Component/Register"


let routes=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
        {
            index:true,
            element:<Home/>
        }, 
        {
            path:"/about",
            element:<About/>
        },
         {
            path:"/contact",
            element:<Contact/>
         },
         {
            path:"/login",
            element:<Login/>
         },
         {
            path:"/register",
            element:<Register/>
         }  
        ]
    }
])
export default routes