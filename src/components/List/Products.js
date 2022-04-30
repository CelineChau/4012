import React from 'react';
import Product from '../Product/Product';

const Products = ({search, data, setName}) => {
    const dataFiltered = data.filter(oData => oData.Food_product.toLowerCase().includes(search));

    return (
        <div className="w-full bg-white rounded-lg shadow-lg lg:w-1/3">
            <ul className='divide-y-2 divide-gray-100 products list-disc'>
                { 
                    dataFiltered.map(
                        (oInfo, index) =>
                            <Product 
                                key={index} 
                                info={oInfo}
                                setName={setName}
                            />
                    )
                }
            </ul>
        </div>
    );
};

export default Products;