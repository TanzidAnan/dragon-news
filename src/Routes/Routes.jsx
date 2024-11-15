import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayouts";
import CategoryNews from "../Pages/CategoryNews";

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayouts></HomeLayouts>,
        children:[
            {
                path:'/',
                element:<Navigate to={"/category/01"}></Navigate>
            },
            {
                path:'/category/:id',
                element:<CategoryNews></CategoryNews>,
                loader:({params}) =>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path:'/news',
        element:<h1>News layout</h1>
    },
    {
        path:'/login',
        element:<h1>Login page</h1>
    },
    {
        path:'*',
        element:<h1>error</h1>
    }
])
export default Routes;