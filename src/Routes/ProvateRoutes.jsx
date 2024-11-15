import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const ProvateRoutes = ({children}) => {
    const {user} =useContext(AuthContext);
    if(user && user.email){
        return(children)
    }
    return (
        <div>
            <Navigate to='/auth/login'></Navigate>
        </div>
    );
};

export default ProvateRoutes;