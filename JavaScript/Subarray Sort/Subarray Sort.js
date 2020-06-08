function subarraySort(array) {
    const smallestSortedSubArray = [];
    let minOutOfOrder = Infinity;
    let maxOutOfOrder = -Infinity;
      
    for (let i = 0; i < array.length; i++){
        if (outOfOrder(i, array[i], array)){
            minOutOfOrder = Math.min(array[i], minOutOfOrder)
            maxOutOfOrder = Math.max(array[i], maxOutOfOrder)
        }
    }
    if (minOutOfOrder === Infinity){
        return [-1, -1];
    }
    let i = 0;
    while (minOutOfOrder >= array[i]){
        i++;
    }
    smallestSortedSubArray.push(i);
    
    let j = array.length-1;
    while (maxOutOfOrder <= array[j])
        j--;
    smallestSortedSubArray.push(j);
    console.log(smallestSortedSubArray);
    return smallestSortedSubArray;
}

function outOfOrder(index, num, array){
    if (index === 0) return num > array[index+1];
    if (index === array.length-1) return num < array[index-1];
    return num > array[index+1] || num < array[index-1];
} 
