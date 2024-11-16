import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Pages/Loading";

const ProvateRoutes = ({children}) => {
    const {user,loading} =useContext(AuthContext);
    const location =useLocation();
    console.log(location)
    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email){
        return(children)
    }
    return (
        <div>
            <Navigate state={location.pathname} to='/auth/login'></Navigate>
        </div>
    );
};

export default ProvateRoutes;