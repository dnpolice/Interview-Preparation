function numbersInPi(pi, numbers) {
    const numberSet = {}
    for (const num of numbers)
        numberSet[num] = true;
    const minSpaces = getMinSpaces(pi, numberSet, {}, 0);
    return minSpaces === Infinity ? -1 : minSpaces;
}
  
function getMinSpaces(pi, numberSet, cache, idx){
    if (idx === pi.length) return -1;
    if (idx in cache) return cache[idx];
    let minSpaces = Infinity;
    for (let i = idx+1; i <= pi.length; i++){
        const prefix = pi.slice(idx, i);
        if (prefix in numberSet)
            minSpaces = Math.min(1 + getMinSpaces(pi, numberSet, cache, i), minSpaces);
    }
    cache[idx] = minSpaces;
    return minSpaces;
}

/*
Put a string into a recursive function (getMinSpaces)
Can you get it from the favourite number list.
If not index the string forward by one and check again.
If you can store that as the lowestNumber of spaces
Index one forward.
Example is the min number of spaces to make 4 and this 123909509124
less then the number of spaces to make 41239 and 09509124
Store the min number of spaces required to create from one index to the end.
*/
