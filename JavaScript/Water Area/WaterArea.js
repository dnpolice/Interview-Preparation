function waterArea(heights) {
	let maxRight = 0;
	let maxsRight = [];
  for (let i = heights.length-1; i >= 0; i--){
		maxsRight.unshift(maxRight);
		maxRight = Math.max(heights[i], maxRight); 
	}
	let maxLeft = 0;
	for (let i = 0; i < heights.length; i++){
		const minHeight = Math.min(maxLeft, maxsRight[i]);
		if (minHeight > heights[i])
			maxsRight[i] = minHeight - heights[i];
		else{
			maxsRight[i] = 0;
			maxLeft = Math.max(maxLeft, heights[i]);
		}			
	}
	return maxsRight.reduce((a,b) => a+b, 0)
}
