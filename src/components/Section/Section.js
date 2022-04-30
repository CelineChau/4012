import React from 'react';
import Card from '../Card/Card';

const Section = ({ information, index }) => {
	return (
        <div className='section'>
            <Card index={index} information={information}></Card>
        </div>
	);
};

export default Section;
