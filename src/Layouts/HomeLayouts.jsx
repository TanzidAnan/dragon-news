import Header from "../Compontens/Header";
import LeftNavber from "../Compontens/layout-compontents/LeftNavber";
import RightNavber from "../Compontens/layout-compontents/RightNavber";
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

            <main className="w-10/12 mx-auto pt-5 grid md:grid-cols-12 gap-4">
                <aside className="left col-span-3">
                    <LeftNavber></LeftNavber>
                </aside>
                <section className="col-span-6">main contents</section>
                <aside className="col-span-3">
                    <RightNavber></RightNavber>
                </aside>
            </main>

        </div>
    );
};

export default HomeLayouts;