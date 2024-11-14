import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LetesNews = () => {
    return (
        <div className="flex gap-2 items-center bg-base-300 mt-5 py-2 px-4">
            <p className="bg-[#D72050] text-white px-3 py-2">Latest</p>
           <Marquee pauseOnHover={true}>
            <Link to='/'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt enim tempore porro consequuntur, eos quibusdam doloribus quam quaerat quis amet.</Link>
           </Marquee>
        </div>
    );
};

export default LetesNews;