function diskStacking(disks) {
	disks.sort((a,b) => a[2] - b[2]);
	const heights = disks.map(disk => disk[2]);
	const sequences = new Array(disks.length);
	let maxIndex = 0;
	for (let i = 1; i < disks.length; i++){
		const currentDisk = disks[i];
		for (let j = 0; j < i; j++){
			const prevDisk = disks[j];
			if (areValidDimensions(currentDisk, prevDisk)){
				if (heights[i] < heights[j] + currentDisk[2]){
					heights[i] = heights[j] + currentDisk[2];
					sequences[i] = j;
				}
			}
		}
		if (heights[i] > heights[maxIndex]) maxIndex = i;
	}
	return buildSequence(disks, maxIndex, sequences);
}

function areValidDimensions(currentDisk, prevDisk){
	return prevDisk[0] < currentDisk[0] && prevDisk[1] < currentDisk[1] && prevDisk[2] < currentDisk[2];
}
v
function buildSequence(disks, maxIndex, sequences){
	let currentIndex = maxIndex;
	const sequence = [];
	while (currentIndex !== undefined){
		sequence.unshift(disks[currentIndex]);
		currentIndex = sequences[currentIndex]
	}
	return sequence;
}


/*
Sort the results
Now the left can potentially go on top right cant
If we start from the left and figure out max at each point store values in an array
To avoid duplicates and to allow pattern to work correctly put current at bottom
If one matches when looking back take its max
build sequence
*/
