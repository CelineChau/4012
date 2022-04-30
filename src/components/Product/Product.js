import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Product = ({info, setName}) => {
    const [productInfo, setProductInfo] = useState("");

    return (
        <li 
            className="p-3 hover:bg-blue-600 hover:text-blue-200"
            onClick={() => setName(info.Food_product)}
        >
            <div className="product">
                <p>{info.Food_product}</p>
            </div>
        </li>
    );
};

export default Product;