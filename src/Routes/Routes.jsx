import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayouts";

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayouts></HomeLayouts>,
        children:[
            {
                path:'/category/:id',
                element:<h1>this is category</h1>
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