import { createBrowserRouter } from "react-router";
import HomeLayout from "../layOuts/HomeLayout";
import Home from "../pages/Home";
import ToyNews from "../pages/ToyNews";

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
        element:<h2>Authentication Layout</h2>
    },
    {
        path:'/news',
        element:<h2>News Layout</h2>
    },
    {
        path:'/*',
        element:<h2>Error404</h2>
    }
])

export default router;