import { useEffect, useState } from "react";

const LeftNavber = () => {
    const [categories,setCategories] =useState([]);

    useEffect( () =>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res =>res.json())
        .then(data =>console.log(data.data.news_category))
    },[])

    return (
        <div>
            <h1 className="font-semibold font-poppins text-lg">All Caterogy</h1>
        </div>
    );
};

export default LeftNavber;