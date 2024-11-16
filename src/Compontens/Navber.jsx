import { Link } from "react-router-dom";
import userIcon from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navber = () => {
    const {user,logOut} =useContext(AuthContext);
    const hendleLogOut =() =>{
        logOut()
        .then(res =>{
            console.log(res)
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    return (
        <div className="flex justify-between ">
            <div className="">
                {user?.email}
            </div>
            <div className="nav flex gap-4">
                <Link to='/'>Home</Link>
                <Link to='/about'>about</Link>
                <Link to='/career'>Career</Link>
            </div>
            <div className="flex gap-4 items-center">
                <div className="">
                    {
                        user && user?.email ?(
                            <>
                            <img className="w-16 rounded-full" src={user?.photoURL} alt="" />
                            </>
                        ):(
                            <img className="w-[40px] h-[7vh]" src={userIcon} alt="" />
                        )
                    }
                </div>
                
                {
                    user && user.email?
                    <button onClick={hendleLogOut} className="btn btn-neutral rounded-none">Log-Out</button>
                    :<Link to='/auth/login' className="btn btn-neutral rounded-none">Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navber;