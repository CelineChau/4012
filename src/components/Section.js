import React from 'react';

const Section = ({oInformation}) => {

    return (
        <div>
            <div className="categoryName">{oInformation.category}</div>
            <div className="infoValue">{oInformation.value}</div>
        </div>
    );
};

export default Section;