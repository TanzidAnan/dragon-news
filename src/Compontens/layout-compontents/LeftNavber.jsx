import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavber = () => {
    const [categories,setCategories] =useState([]);

    useEffect( () =>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res =>res.json())
        .then(data =>setCategories(data.data.news_category))
    },[])
console.log(categories)
    return (
        <div>
            <h1 className="font-semibold font-poppins text-lg">All Caterogy:({categories.length})</h1>
            <div className="flex flex-col gap-2 mt-9">
                {
                    categories.map((categorie,idx) =><NavLink
                    to={`/category/${categorie.category_id}`}
                    className="btn" key={idx}>{categorie.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNavber;