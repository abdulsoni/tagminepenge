export function getMaxPrice(products){
	
	return Math.max(...(products || []).map(elt => elt.price));
}

export function getMinPrice(products){
	return Math.min(...(products || []).map(elt => elt.price));
}
