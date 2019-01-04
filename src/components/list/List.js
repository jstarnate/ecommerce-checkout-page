import React, { Component, createContext } from 'react';
import Table from './Table';
import BackButton from './BackButton';
import Costs from './Costs';
import MobileList from './MobileList';
import shirtImage from '../../images/shirt.jpg';
import shoesImage from '../../images/shoes.jpg';
import jacketImage from '../../images/jacket.jpg';

export const ListContext = createContext();

export default class List extends Component {
	state = {
		items: [
			{
				key: '1',
				image: shirtImage,
				name: 'Henley T-Shirt',
				color: 'Dark Gray',
				size: 'S',
				quantity: '2',
				price: '$39.98'
			},
			{
				key: '2',
				image: shoesImage,
				name: 'High Top Sneakers',
				color: 'Brown',
				size: '10.5',
				quantity: '1',
				price: '$69.99'
			},
			{
				key: '3',
				image: jacketImage,
				name: 'Sweater Hooded',
				color: 'Light Gray',
				size: 'S',
				quantity: '1',
				price: '$39.99'
			}
		]
	}

	render() {
		const { items } = this.state;

		return(
			<section className='list'>
				
				<h1 className='list__heading heading'>Shopping Cart.</h1>
				
				<ListContext.Provider value={{ items }}>
					{
						(this.props.mobileMode || window.innerWidth <= 500)
						? <MobileList />
						: <Table />
					}
				</ListContext.Provider>
				
				<section className='list__bottom flex--stretch'>
					<div className='list__bottom-section'><BackButton /></div>
					<div><Costs /></div>
				</section>
			
			</section>
		)
	}
}