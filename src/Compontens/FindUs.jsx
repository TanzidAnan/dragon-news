import { FaFacebook,FaInstagram,FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div className="my-9">
            <h1 className="text-lg font-semibold">Find Us On</h1>
            <div className="join flex join-vertical mt-6 *:bg-base-200">
                <button className="btn join-item justify-start"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn join-item justify-start"><FaInstagram></FaInstagram>Instagram</button>
                <button className="btn join-item justify-start"><FaTwitter></FaTwitter> Ewitter</button>
            </div>
        </div>
    );
};

export default FindUs;