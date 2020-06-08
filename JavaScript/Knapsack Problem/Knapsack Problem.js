function knapsackProblem(items, capacity) {
	const maxValues = [];
	for (let i = 0; i < items.length + 1; i++){
		maxValues.push(new Array(capacity + 1).fill(0));
	}
	for (let i = 1; i < items.length + 1; i++){
		for (let j = 0; j <= capacity; j++){
			if (items[i-1][1] <= j)
				maxValues[i][j] = Math.max(items[i-1][0] + maxValues[i-1][j-items[i-1][1]], maxValues[i-1][j]);
			else
				maxValues[i][j] = maxValues[i-1][j];
		}
	}
	console.log(maxValues[items.length][capacity]);
	return [maxValues[items.length][capacity], getItemsUsed(maxValues, items)];
}

function getItemsUsed(maxValues, items){
	const itemsUsed = [];
	let i = maxValues.length-1;
	let j = maxValues[0].length-1;
	while (j > 0 && i > 0){
		if (maxValues[i][j] === maxValues[i-1][j])
			i--;
		else{
			itemsUsed.unshift(i-1);
			j -= items[i-1][1];
			i--;
		}
	}
	return itemsUsed;
}
