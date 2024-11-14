import { useState } from "react";

const LeftNavber = () => {
    const [categories,setCategories] =useState([]);
    
    return (
        <div>
            <h1 className="font-semibold font-poppins text-lg">All Caterogy</h1>
        </div>
    );
};

export default LeftNavber;