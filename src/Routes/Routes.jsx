import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayouts";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout";

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
        path:'/auth',
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/login',
                element:<h2>Login page</h2>
            },
            {
                path:'/auth/register',
                element:<h2>register page</h2>
            },
        ]
    },
    {
        path:'*',
        element:<h1>error</h1>
    }
])
export default Routes;