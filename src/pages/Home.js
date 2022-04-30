import React, { useState, useEffect } from 'react';
import Products from '../components/List/Products';
import SearchBar from '../components/SearchBar/SearchBar';
import Section from '../components/Section/Section';
import axios from 'axios';

const Home = () => {
    const [product, setProduct] = useState("");
    const [currProduct, setCurrProduct] = useState({});
    const [name, setName] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://europe-west1-g-hack-devoteam-4012.cloudfunctions.net/getAliments')
            .then((res) => setData(res.data));
    }, [])

    useEffect(() => {
        console.warn('name', name);
        axios.get(`https://europe-west1-g-hack-devoteam-4012.cloudfunctions.net/function-1?aliment=${name}`)
            .then((res) => {
                let data = res.data ? res.data[0] : [];
                console.warn('produit info', data);
                setCurrProduct(data);
                setCategories(
                    {
                        category: 'Land use change',
                        value: currProduct.Land_use_change
                    },
                    {
                        category: 'Animal feed',
                        value: currProduct.Animal_Feed
                    },
                    {
                        category: 'Farm',
                        value: currProduct.Farm
                    },
                    {
                        category: 'Processing',
                        value: currProduct.Processing
                    },
                    {
                        category: 'Transport',
                        value: currProduct.Transport
                    },
                    {
                        category: 'Packaging',
                        value: currProduct.Packging
                    },
                    {
                        category: 'Retail',
                        value: currProduct.Retail
                    }
                );
            });
    }, [name]);

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
            <Products data={data} search={product} setName={setName}></Products>
          </div>
        {
            (currProduct && categories) && (
                categories.map (
                    (oCategory, iIndex) => <Section index={iIndex} information={oCategory}></Section>
                )
            )
        }
      </div>
    );
};

export default Home;