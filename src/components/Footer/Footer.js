import React from 'react';

const Footer = ({data}) => {

	return (
		<div data-aos="fade-in" className="footer">

			<div className="footer-text">
				<div className="imgfoot" />
				<div className="title">
					<h1>Some figures</h1>
					<p>Emissions for a kilo of {data.Food_product} : </p>
					<p>{data.Total_emissions + ' Kg CO2'}</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
