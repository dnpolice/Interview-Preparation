function maxSumIncreasingSubsequence(array) {
    const maxSums = array.map(number => number);
    const linkedIdxs = new Array(array.length);
    let maxSumIdx = 0;
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < i; j++){
            if (array[j] < array[i] && maxSums[i] <= maxSums[j] + array[i]){
                maxSums[i] = maxSums[j] + array[i];
                linkedIdxs[i] = j;
            }
        }
        if (maxSums[i] >= maxSums[maxSumIdx]) maxSumIdx = i;
    }
    return [maxSums[maxSumIdx], generateIdxSequence(linkedIdxs, maxSumIdx, array)];
}

function generateIdxSequence(linkedIdxs, currentSumIdx, array){
    const idxSequence = [];
    while (currentSumIdx !== undefined){
        idxSequence.unshift(array[currentSumIdx]);
        currentSumIdx = linkedIdxs[currentSumIdx];
    }
    return idxSequence;
}

/*
Iterate through all the numbers
Store the maximum sum that can be generated at each index looking to the start of the array
Store the maximum sum index
To store the past sequencs as they are not next to eachother store the index of the past max sum it was added to.
and null if one does not exist
if (array[j] < array[i] && maxSum[i] < maxSum[j] + array[i])
*/
