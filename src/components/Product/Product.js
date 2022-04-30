import React from 'react';

const Product = ({info}) => {
    return (
        <li class="p-3 hover:bg-blue-600 hover:text-blue-200">
            <div className="product">
                <p>{info.Food_product}</p>
            </div>
        </li>
    );
};

export default Product;