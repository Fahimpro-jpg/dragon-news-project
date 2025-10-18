import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Category from "../pages/Category";

const router = createBrowserRouter(
    [
        {
            path:'/',
            Component:HomeLayout,
            children:[
                {
                    path:'',
                    element:<Home></Home>
                },
                {
                    path:'/category/:id',
                    element:<Category></Category>
                },
            ]
        },
        {
            path:"/auth",
            element:<h2>authentication Layout</h2>
        },
        {
            path:"/news",
            element:<h2>News Layout</h2>
        },
        {
            path:"/*",
            element:<ErrorPage></ErrorPage>
        }
    ]
)
export default router