// Write function that will show only even numbers of this array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = arr.filter(number => {
  return number % 2 === 0;
});
console.log(even);