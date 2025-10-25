import { createBrowserRouter } from "react-router";
import HomeLayout from "../layOuts/HomeLayout";
import Home from "../pages/Home";
import ToyNews from "../pages/ToyNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layOuts/AuthLayout";
import ToyDetails from "../pages/ToyDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout/>,
        children:[
            {
                path:"",
                element:<Home></Home>,
            },
            {
                path:"/toyNews/:id",
                element:<ToyNews></ToyNews>,
                loader: () => fetch('/toyNews.json'),
            },
        ],
    },
    {
        path:'/auth',
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/login',
                element:<Login></Login>
            },
            {
                path:'/auth/register',
                element:<Register></Register>
            }
        ]
    },
    {
        path:'/toy-details/:toyId',
        element:<PrivateRoute>
            <ToyDetails></ToyDetails>
        </PrivateRoute>,
        loader: () => fetch("/toyNews.json"),
        hydrateFallbackElement:<Loading></Loading>,
    },
    {
        path:'/*',
        element:<ErrorPage/>
    }
])

export default router;