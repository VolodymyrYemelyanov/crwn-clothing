import React, { Component } from 'react';

import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collectioin-preview/collection-previw.component';

class ShopPage extends Component {
	constructor(props) {
		super(props);
// 
		this.state = {
			collections: SHOP_DATA,
		}
	}

	render() {
		const {collections} = this.state;
		return(
			<div className="shop-page">
				{
					collections.map(({id, ...otherCollectionProps}) => (
						<CollectionPreview key={id} {...otherCollectionProps}/>
					))
				}
				{/*SHOP PAGE*/}
			</div>
		);
	}
}

export default ShopPage;