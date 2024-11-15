import { useLoaderData } from "react-router-dom";
import NewsCard from "../Compontens/NewsCard";

const CategoryNews = () => {
    const {data} =useLoaderData();
    console.log(data)
    return (
        <div>
            <p className="text-lg font-semibold mb-3">Dragon News Home</p>
            <h1 className="text-slate-500 font-poppins ">({data.length}) News Found in this category</h1>
            <div>
                {
                    data.map((singleNews,idx) =><NewsCard
                    news={singleNews}
                    key={idx}
                    ></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;