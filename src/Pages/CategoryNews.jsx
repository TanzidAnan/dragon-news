import { useLoaderData } from "react-router-dom";

const CategoryNews = () => {
    const {data} =useLoaderData();
    console.log(data)
    return (
        <div>
            <h1>{data.length} News Found in this category</h1>
        </div>
    );
};

export default CategoryNews;