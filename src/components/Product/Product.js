import React from 'react';

const Product = ({info}) => {
    return (
        <li>
            <div className="product">
                <p>{info.text}</p>
            </div>
        </li>
    );
};

export default Product;