import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../Product/Product';

const Products = ({search, size}) => {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://europe-west1-g-hack-devoteam-4012.cloudfunctions.net/getAliments')
            .then((res) => setData(res.data));
    }, [])

    const dataFiltered = data.filter(oData => oData.Food_product.toLowerCase().includes(search));
    size(dataFiltered.length);

    return (
        <div class="w-full bg-white rounded-lg shadow-lg lg:w-1/3">
            <ul className='divide-y-2 divide-gray-100 products list-disc'>
                { 
                    dataFiltered.map((oInfo, index) => <Product key={index} info={oInfo}></Product>)
                }
            </ul>
        </div>
    );
};

export default Products;