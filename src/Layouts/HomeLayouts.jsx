import Header from "../Compontens/Header";
import LetesNews from "../Compontens/LetesNews";
import Navber from "../Compontens/Navber";

const HomeLayouts = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-10/12 mx-auto">
                    <LetesNews></LetesNews>
                </section>
            </header>
            <nav>
                <section className="w-10/12 mx-auto mt-4">
                    <Navber></Navber>
                </section>
            </nav>

        </div>
    );
};

export default HomeLayouts;