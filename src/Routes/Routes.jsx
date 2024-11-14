import { createBrowserRouter } from "react-router-dom";

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<h1>Home Layout</h1>
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