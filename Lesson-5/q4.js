// Write function that will sort this array by ascending order [3, 2, 30, -4, 9, 10, 7, 55, 12]

let numbers = [3, 2, 30, -4, 9, 10, 7, 55, 12];
numbers.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});
console.log(numbers);