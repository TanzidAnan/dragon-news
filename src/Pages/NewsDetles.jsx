import { Link, useLoaderData } from "react-router-dom";
import Header from "../Compontens/Header";
import RightNavber from "../Compontens/layout-compontents/RightNavber";

const NewsDetles = () => {
    const data = useLoaderData();
    const news = data.data[0];
    console.log(news)
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-10/12 mx-auto grid grid-cols-12 gap-5">
                <section className="col-span-9">
                    <div className="card bg-base-100">
                        <figure className="px-10 pt-10">
                            <img
                                src={news?.image_url}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{news?.title}</h2>
                            <p>{news?.details}</p>
                            <div className="card-actions">
                                <Link to='/' className="btn btn-error">All news in this category</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="col-span-3">
                    <RightNavber></RightNavber>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetles;