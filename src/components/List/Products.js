import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../Product/Product';

const Products = ({search, size}) => {

    const [dataTest, setDataTest] = useState([]);
    useEffect(() => {
        axios.get('https://europe-west1-g-hack-devoteam-4012.cloudfunctions.net/getAliments')
            .then((res) => setDataTest(res.data));
    }, [])

    const test = dataTest;

    const [data, setData] = useState([
        {
            text: 'Riz'
        },
        {
            text: 'Orange'
        },
        {
            text: 'Banane'
        },
        {
            text: 'Carotte'
        },
        {
            text: 'Haricot'
        }
    ]);

    const dataFiltered = data.filter(oData => oData.text.toLowerCase().includes(search));
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