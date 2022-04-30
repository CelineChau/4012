import React, { useState } from 'react';
import Products from '../components/List/Products';
import SearchBar from '../components/SearchBar/SearchBar';
import Section from '../components/Section/Section';

const Home = () => {
    const [product, setProduct] = useState("Tomato");
    const [nbProducts, setNbProducts] = useState(0);

    const [categories, setData] = useState([
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
        <SearchBar setValue={setProduct} />
        <Products size={setNbProducts} search={product}></Products>
        {
            nbProducts > 0 ? categories.map((oCategory, iIndex) => <Section index={iIndex} information={oCategory}></Section>) : null
        }
      </div>
    );
};

export default Home;