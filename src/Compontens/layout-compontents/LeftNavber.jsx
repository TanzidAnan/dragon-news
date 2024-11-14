import { useEffect, useState } from "react";

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
                    categories.map((categorie,idx) =><button className="btn" key={idx}>{categorie.category_name}</button>)
                }
            </div>
        </div>
    );
};

export default LeftNavber;