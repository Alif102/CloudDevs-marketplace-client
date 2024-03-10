import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import AddJobs from "../Page/AddJobs/AddJobs";
import JobDetails from "../Page/JobsDetails/JobDetails";
import MyBids from "../Page/MyBids/MyBids";
import MyPosted from "../Page/MyPosted/MyPosted";
import UpdateJobs from "../Page/MyPosted/UpdateJobs";
import BidRequests from "../Page/BidRequests/BidRequests";
import Route404 from "./Route404";
import PrivateRoute from "./PrivateRoute";
import HelpCenter from "../Page/HelpCenter/HelpCenter";


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
             {
                path: '/addJobs',
                element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>
            },
            {
                path: '/jobsDetails/:id',
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://clouddevs.vercel.app/alljobs/${params.id}`)
            },
            {
                path: '/myBids',
                element: <PrivateRoute><MyBids></MyBids></PrivateRoute>
            },
            {
                path: '/myPosted',
                element: <PrivateRoute><MyPosted></MyPosted></PrivateRoute>
            },
            {
                path: '/updateJobs/:id',
                element: <UpdateJobs></UpdateJobs>,
                loader: ({params}) => fetch(`https://clouddevs.vercel.app/alljobs/${params.id}`)
            },
            {
                path: '/bidRequests',
                element: <PrivateRoute><BidRequests></BidRequests></PrivateRoute>
            },
          
            {
                path: '/helpCenter',
                element: <HelpCenter></HelpCenter>
            }
           
        ]
    }
])

export default router;
