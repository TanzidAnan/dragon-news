import { Outlet } from "react-router-dom";
import Navber from "../Compontens/Navber";

const AuthLayout = () => {
    return (
        <div className=" font-poppins bg-[#F3F3F3]">
            <section className="pt-8 py-3 w-10/12 mx-auto">
                <Navber></Navber>
            </section>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;