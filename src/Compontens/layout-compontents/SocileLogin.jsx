import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

const SocileLogin = () => {
    return (
        <div>
            <h1 className="text-lg font-semibold">Login with</h1>
            <div className="flex flex-col gap-3 *:w-full">
                <button className="btn"><FcGoogle /> Google with Login</button>
                <button className="btn"><FaGithub /> github with login</button>
            </div>
        </div>
    );
};

export default SocileLogin;