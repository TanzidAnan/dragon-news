import { Link } from "react-router-dom";
import userIcon from '../assets/user.png'
const Navber = () => {
    return (
        <div className="flex justify-between ">
            <div className="">.</div>
            <div className="nav flex gap-4">
                <Link to='/'>Home</Link>
                <Link to='/about'>about</Link>
                <Link to='/career'>Career</Link>
            </div>
            <div className="flex gap-4">
                <img className="w-[40px] h-[7vh]" src={userIcon} alt="" />
                <Link to='/auth/login' className="btn btn-neutral rounded-none">Login</Link>
            </div>
        </div>
    );
};

export default Navber;