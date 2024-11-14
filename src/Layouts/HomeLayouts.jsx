import Header from "../Compontens/Header";
import LetesNews from "../Compontens/LetesNews";

const HomeLayouts = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className="w-10/12 mx-auto">
                    <LetesNews></LetesNews>
                </section>
            </header>

        </div>
    );
};

export default HomeLayouts;