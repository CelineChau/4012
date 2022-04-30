import React, { useState, useEffect } from 'react';
import Products from '../components/List/Products';
import SearchBar from '../components/SearchBar/SearchBar';
import Section from '../components/Section/Section';
import axios from 'axios';

const Home = () => {
    const [product, setProduct] = useState("Tomato");
    const [nbProducts, setNbProducts] = useState(0);

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://europe-west1-g-hack-devoteam-4012.cloudfunctions.net/getAliments')
            .then((res) => setData(res.data));
    }, [])

    const [categories, setCategories] = useState([
        {
            category: 'Land use change',
            value: 0
        },
        {
            category: 'Animal feed',
            value: 0
        },
        {
            category: 'Farm',
            value: 0
        },
        {
            category: 'Processing',
            value: 0
        },
        {
            category: 'Transport',
            value: 0
        },
        {
            category: 'Packaging',
            value: 0
        },
        {
            category: 'Retail',
            value: 0
        }
    ]);

    return (
      <div className="container mx-auto">
          <div className="wrapper-list">
            <SearchBar setValue={setProduct} />
            <Products data={data} search={product}></Products>
          </div>
        {
            nbProducts > 0 ? categories.map((oCategory, iIndex) => <Section index={iIndex} information={oCategory}></Section>) : null
        }
      </div>
    );
};

export default Home;