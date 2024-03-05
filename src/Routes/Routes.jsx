import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";

import Route404 from "./Route404";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Route404></Route404>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
           
           
        ]
    }
])

export default router;